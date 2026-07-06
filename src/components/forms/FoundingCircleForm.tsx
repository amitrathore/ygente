import { Card } from '@/components/ui';
import { TallyEmbed } from './TallyEmbed';

export function FoundingCircleForm() {
  return (
    <Card variant="elevated">
      <TallyEmbed
        form="foundingCircle"
        title="Ygente founding circle application"
        minHeight={620}
      />
    </Card>
  );
}
