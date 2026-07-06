import { Card } from '@/components/ui';
import { TallyEmbed } from './TallyEmbed';

export function ContactForm() {
  return (
    <Card variant="elevated">
      <TallyEmbed form="contact" title="Ygente contact form" minHeight={620} />
    </Card>
  );
}
