const apiKey = process.env.TALLY_SO_API_KEY;

if (!apiKey) {
  throw new Error('TALLY_SO_API_KEY is required');
}

const workspaceId = 'wkY42J';

function styleSettings(language) {
  return {
    language,
    isClosed: false,
    hasProgressBar: false,
    hasPartialSubmissions: false,
    pageAutoJump: false,
    saveForLater: true,
    styles: {
      theme: 'CUSTOM',
      color: {
        background: '#ffffff',
        text: '#111827',
        accent: '#00CED1',
        buttonBackground: '#00CED1',
        buttonText: '#ffffff',
      },
    },
  };
}

function id() {
  return crypto.randomUUID();
}

function title(html) {
  return {
    type: 'TITLE',
    groupType: 'QUESTION',
    uuid: id(),
    groupUuid: id(),
    payload: { html },
  };
}

function input(type, name, isRequired = true, placeholder = '') {
  return {
    type,
    groupType: type,
    uuid: id(),
    groupUuid: id(),
    payload: {
      name,
      isRequired,
      placeholder,
      hasDefaultAnswer: false,
      ...(type === 'INPUT_TEXT' || type === 'TEXTAREA'
        ? { hasMinCharacters: false, hasMaxCharacters: false }
        : {}),
    },
  };
}

function dropdown(name, options) {
  const groupUuid = id();

  return options.map((text, index) => ({
    type: 'DROPDOWN_OPTION',
    groupType: 'DROPDOWN',
    uuid: id(),
    groupUuid,
    payload: {
      name: index === 0 ? name : undefined,
      index,
      isFirst: index === 0,
      isLast: index === options.length - 1,
      isRequired: true,
      randomize: false,
      isOtherOption: false,
      allowMultiple: false,
      hasMaxChoices: false,
      text,
      hasDefaultAnswer: false,
    },
  }));
}

function formTitle(title, buttonLabel) {
  return {
    type: 'FORM_TITLE',
    groupType: 'FORM_TITLE',
    uuid: id(),
    groupUuid: id(),
    payload: {
      html: title,
      button: { label: buttonLabel },
    },
  };
}

function field(label, block) {
  return [title(label), ...(Array.isArray(block) ? block : [block])];
}

const forms = [
  {
    key: 'foundingCircle',
    body: {
      workspaceId,
      status: 'PUBLISHED',
      settings: styleSettings('es'),
      blocks: [
        formTitle('Ygente - Circulo Fundador', 'Enviar aplicacion'),
        ...field('Nombre', input('INPUT_TEXT', 'name')),
        ...field('Email', input('INPUT_EMAIL', 'email')),
        ...field(
          'Rol de interes',
          dropdown('role', ['Embajador', 'Marca'])
        ),
        ...field(
          'Por que quieres unirte?',
          input('TEXTAREA', 'why', true)
        ),
      ],
    },
  },
  {
    key: 'contact',
    body: {
      workspaceId,
      status: 'PUBLISHED',
      settings: styleSettings('es'),
      blocks: [
        formTitle('Ygente - Contacto', 'Enviar mensaje'),
        ...field('Nombre', input('INPUT_TEXT', 'name')),
        ...field('Email', input('INPUT_EMAIL', 'email')),
        ...field('Asunto', input('INPUT_TEXT', 'subject')),
        ...field('Mensaje', input('TEXTAREA', 'message', true)),
      ],
    },
  },
  {
    key: 'waitlist',
    body: {
      workspaceId,
      status: 'PUBLISHED',
      settings: styleSettings('es'),
      blocks: [
        formTitle('Ygente - Lista de Espera', 'Unirme'),
        ...field('Email', input('INPUT_EMAIL', 'email')),
        ...field(
          'Rol de interes',
          dropdown('role', ['Embajador', 'Marca', 'Ambos'])
        ),
      ],
    },
  },
  {
    key: 'foundingCircleEn',
    body: {
      workspaceId,
      status: 'PUBLISHED',
      settings: styleSettings('en'),
      blocks: [
        formTitle('Ygente - Founding Circle', 'Submit application'),
        ...field('Name', input('INPUT_TEXT', 'name')),
        ...field('Email', input('INPUT_EMAIL', 'email')),
        ...field(
          'Role of interest',
          dropdown('role', ['Ambassador', 'Brand'])
        ),
        ...field(
          'Why do you want to join?',
          input('TEXTAREA', 'why', true)
        ),
      ],
    },
  },
  {
    key: 'contactEn',
    body: {
      workspaceId,
      status: 'PUBLISHED',
      settings: styleSettings('en'),
      blocks: [
        formTitle('Ygente - Contact', 'Send message'),
        ...field('Name', input('INPUT_TEXT', 'name')),
        ...field('Email', input('INPUT_EMAIL', 'email')),
        ...field('Subject', input('INPUT_TEXT', 'subject')),
        ...field('Message', input('TEXTAREA', 'message', true)),
      ],
    },
  },
  {
    key: 'waitlistEn',
    body: {
      workspaceId,
      status: 'PUBLISHED',
      settings: styleSettings('en'),
      blocks: [
        formTitle('Ygente - Waitlist', 'Join'),
        ...field('Email', input('INPUT_EMAIL', 'email')),
        ...field(
          'Role of interest',
          dropdown('role', ['Ambassador', 'Brand', 'Both'])
        ),
      ],
    },
  },
];

const listResponse = await fetch('https://api.tally.so/forms?limit=500', {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

if (!listResponse.ok) {
  const text = await listResponse.text();
  throw new Error(`list: ${listResponse.status} ${text}`);
}

const existingForms = await listResponse.json();
const existingByName = new Map(
  existingForms.items.map((form) => [form.name, form.id])
);

for (const form of forms) {
  const name = form.body.blocks[0].payload.html;
  const existingId = existingByName.get(name);

  if (existingId) {
    console.log(`${form.key}=${existingId}`);
    continue;
  }

  const response = await fetch('https://api.tally.so/forms', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form.body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${form.key}: ${response.status} ${text}`);
  }

  const created = await response.json();
  console.log(`${form.key}=${created.id}`);
}
