# Ygente Network Commonwealth — Constitution ↔ Codebase Reference

> _De Nuestra Gente. Para Nuestra Gente._
> _"Our prosperity is shared because our future is shared."_

## 1. Purpose & Status

This is a **living reference document**, not a spec and not marketing copy. It
exists so the team has one shared source of truth about three things:

1. What the **Constitution of the Ygente Network Commonwealth (v1.0)** commits us
   to being.
2. What the **codebase actually is** today.
3. The **bridges and gaps** between the two.

**Current phase:** pre-launch. The repository is a bilingual (ES-default / EN)
marketing site built to build a movement and collect a waitlist. None of the
Commonwealth governance machinery is implemented — the Constitution is, at this
stage, an aspirational charter that the product must eventually grow into.

Nothing in this document changes the app. It is documentation only.

---

## 2. The Constitution in Brief

The Constitution reframes Ygente from "a coselling app for Hispanic ambassadors"
into a **Network Commonwealth**: a federation of self-governing communities united
by shared principles, infrastructure, identity, and prosperity (Art. I).

Distilled, the model rests on these load-bearing ideas:

- **Platform ≠ Commonwealth (Art. III).** The Platform (software, marketplace,
  payments, identity, analytics, governance tech) is *subordinate infrastructure*.
  The Commonwealth is the people, families, businesses, creators, stewards, and
  councils it serves. _"Technology serves people. People do not serve technology."_
- **The Commons (Art. IV).** Shared assets — name, trademarks, identity, software,
  governance framework, reputation systems, marketplace infrastructure — belong to
  the whole Commonwealth. No Territory owns them; every Territory contributes to and
  benefits from them.
- **Territories, recursively nested (Art. VIII–IX).** Country → State/Province →
  Region/County → City → Neighborhood → ZIP Code → Community. Each Territory has a
  parent whose role is to **support, not dominate** its children.
- **Subsidiarity (Art. X).** Decisions are made by the smallest capable community;
  higher levels intervene only when cross-Territory coordination is required.
  Centralization is the exception, never the default.
- **Stewardship over ownership (Art. V, VII, XXI).** Communities are never owned;
  they are stewarded. Authority is earned through service, is never permanent, and
  transfers on covenant failure. Leadership exists to _multiply_ leadership across
  generations ("seven-generation thinking").
- **Circulating prosperity (Art. XI, XXII).** Every transaction rewards a *chain*
  of participants — buyer, seller, ambassador, creator, and each Territory up the
  hierarchy. _"Prosperity should move in circles. Not pipelines."_ This is the
  governance-layer expression of the coselling / "influence accounting" idea.
- **Royalty & Treasuries (Art. XII–XIII).** A **Commonwealth Royalty** funds the
  shared Commons (technology, security, legal, expansion, education, brand). Each
  Territory keeps a **Community Treasury** reinvested locally (grants, scholarships,
  sponsorships, events, emergency aid).
- **Trust Capital (Art. XIV).** Trust is the Commonwealth's highest form of capital —
  earned through honesty, reliability, generosity, competence, mentorship, service —
  and it gates leadership opportunity and stewardship eligibility.
- **The Commonwealth Council (Art. XVI).** Guardian, not ruler: protects the
  Constitution, safeguards the Commons, resolves constitutional disputes, ensures
  continuity — while enabling (never replacing) local leadership.

### The Six Inviolable Founding Principles

No amendment may contradict these (Art. XXIII):

1. Stewardship over Ownership
2. Reciprocity over Extraction
3. Subsidiarity over Centralization
4. Trust before Transaction
5. Community before Institution
6. Long-term Prosperity over Short-term Gain

---

## 3. The Codebase As-Is

**Stack:** Next.js 14.2 (App Router), React 18, TypeScript, Tailwind CSS,
Framer Motion. See `package.json`.

**Internationalization:** `next-intl`, locales `['es', 'en']` with `es` as
default and `localePrefix: 'always'` (`/es`, `/en`). All routes live under
`src/app/[locale]/`. Config in `src/i18n/routing.ts` and `src/i18n/request.ts`;
locale enforcement in `src/middleware.ts`.

**Structure:** clean separation of concerns —

- `src/components/ui/` — primitives (`Button`, `Card`, `Input`, `Badge`, …)
- `src/components/sections/` — page blocks (`HeroB2C`, `TrustSection`,
  `MagazineSection`, `VerticalShowcase`, `CommunityStats`, `Flywheel`, …)
- `src/components/forms/` — `WaitlistForm`, `ContactForm`, `FoundingCircleForm`
- `src/components/layout/` — `Header`, `Footer`, `Logo`, `LanguageToggle`

**All user-facing copy is externalized** to `messages/en.json` and
`messages/es.json`. Content is edited there, not hardcoded in components.

**Pages:** Home, Ambassadors (`/embajadores`), Brands (`/marcas`), How It Works
(`/como-funciona`), Pricing (`/precios`), About (`/nosotros`), Founding Circle
(`/circulo-fundador`), Contact (`/contacto`), and legal (`/legal/*`).

**Backend — effectively none.** The two API routes are stubs:

- `src/app/api/waitlist/route.ts` — validates email, then `console.log`s the
  submission with explicit `TODO`s to integrate an email service (SendGrid/SES/
  Resend/Postmark) and a database. Nothing is persisted or sent.
- `src/app/api/contact/route.ts` — same pattern for contact messages.

Consequence: **every waitlist and contact submission is silently dropped.**

---

## 4. Concept → Code Mapping

| Constitutional concept | Where it surfaces today | What it would eventually require |
| --- | --- | --- |
| **Trust Capital** (Art. XIV) | Marketing only — the "Trust Score" feature (`features.confianza` in `messages/en.json`), described as a reputation score from sales/reviews/engagement | A real reputation model: earned-trust ledger, inputs, decay, and gating of stewardship eligibility |
| **Circulating prosperity / chain-of-influence** (Art. XI, XXII) | Marketing only — "coselling / #NoSelling" (`hero`), "The Old Way vs. With Ygente" (`problem`), and the "5Cs Flywheel" (`flywheel`) all describe rewarding the whole influence chain | The "AI-powered influence accounting" engine: multi-party attribution + commission splitting up the Territory hierarchy |
| **Roles** (Ambassadors, Creators, Brands, Hosts) (Art. XVII) | Present as marketing (`roles.*`) and dedicated pages (`/embajadores`, `/marcas`) | Accounts, auth, role-specific dashboards |
| **Membership / waitlist** (Art. XVII) | `WaitlistForm` + `FoundingCircleForm` → stub API routes | Persistence + email; the entry point to actual membership |
| **Territories & recursion** (Art. VIII–IX) | **Not present anywhere** | Territory data model (nested Country→…→Community), parent/child relationships, assignment of members to Territories |
| **Stewardship** (Art. V, VII, XXI) | **Not present anywhere** | Steward roles, earned/transferable authority, succession/mentorship tracking |
| **Subsidiarity** (Art. X) | **Not present anywhere** | Governance/permission model scoped to smallest-capable Territory |
| **Community Treasuries** (Art. XIII) | **Not present anywhere** | Per-Territory ledgers, local reinvestment flows, disbursement rules |
| **Commonwealth Royalty** (Art. XII) | **Not present anywhere** | Royalty computation on transactions, routed to fund the Commons |
| **Commonwealth Council** (Art. XVI) | **Not present anywhere** | Governance layer, dispute resolution, constitutional guardianship |
| **The Commons** (Art. IV) | Partially — brand/name/visual identity exist as the site itself (`public/images/logo.*`, Tailwind theme) | Formal shared-asset governance; most Commons (governance framework, reputation systems) are net-new |

**Legend:** the top rows are *narrative bridges* — the Constitution's ideas
already have a marketing vocabulary in the copy, so the story is consistent. The
bottom rows (Territories, Stewardship, Subsidiarity, Treasuries, Royalty, Council)
are **entirely net-new**: they appear nowhere in the code, not even as copy.

---

## 5. The Gap

Stated plainly, so no one mistakes narrative for capability:

1. **The signature claim is prose.** "AI-powered influence accounting" — the
   mechanism that makes coselling and circulating prosperity real — has no engine,
   no attribution logic, no data model. It exists only in marketing text.
2. **The entire governance layer is prose.** Territories, Stewardship,
   Subsidiarity, Treasuries, Royalty, and the Council — the substance of the
   Constitution — have zero representation in the codebase.
3. **The one live user action loses data.** Waitlist and contact submissions are
   `console.log`ged and dropped. If the site is taking real traffic, real leads
   are being lost right now. This is the highest-priority *operational* gap
   regardless of the Commonwealth roadmap.
4. **Legal is placeholder.** `legalPage.placeholder` in `messages/en.json` points
   to `legal@ygente.com` and "completed soon."

None of this is a criticism of the vision — it is a map of the distance between a
charter written for the long horizon and a site built to open the door.

---

## 6. Open Questions for the Team

These shape any future roadmap and are worth resolving before building governance:

1. **Horizon.** Is the Network Commonwealth a **launch-day story** (positioning) or
   a **multi-year institutional build**? The Constitution's Epilogue ("beyond any
   individual founder... generation") reads as the latter — which implies most of
   Section 4's bottom rows are v2+, not v1.
2. **Real vs. narrative governance at launch.** How much of Territories /
   Stewardship / Treasuries needs to be *functional* at launch versus *described*?
   E.g., can v1 ship with Trust Capital as a visible score before the full
   attribution engine exists behind it?
3. **First concrete slice.** If/when we implement Commonwealth mechanics, the
   natural first slice is the **influence-attribution + commission-split engine**
   (it underpins Art. XI/XXII and the core value prop) plus a minimal **Territory
   assignment** for members. Do we agree that's the wedge?
4. **Operational fix independent of the above.** Should we wire the waitlist/contact
   forms to a real email service + store now, so we stop losing leads while the
   larger vision is debated? (Recommended: yes — it's small and low-risk.)
5. **Constitution as a published artifact.** Do we eventually want the Constitution
   itself surfaced on the site (a bilingual `/constitucion` page) as a movement /
   trust-building asset? Considered but explicitly out of scope for this document.

---

_This document reflects the codebase at the time of writing and the Constitution
v1.0 (Founding Edition). It should be updated as either evolves._
