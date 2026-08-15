import type { Metadata } from 'next';
import ApologeticsContent from '@/components/sections/ApologeticsContent';

export const metadata: Metadata = {
  title: 'Questioning Christianity? | A Gift of Faith & Truth',
  description: 'Atheist, skeptic, agnostic or curious? Bring your biggest questions. Christianity does not ask you to abandon your mind — examine the evidence.',
};

export default function ApologeticsPage() {
  return <ApologeticsContent />;
}
