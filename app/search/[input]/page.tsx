import { redirect } from 'next/navigation';

export default function Page({ params }: { params: { input: string } }) {
  redirect(`/search/${params.input}/1`);
}