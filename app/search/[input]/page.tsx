import { redirect } from 'next/navigation';

interface RedirPageProps {
    params: Promise<{ input: string }>;
}

export default async function Page(props: RedirPageProps) {
	const params = await props.params;
	redirect(`/search/${params.input}/1`);
}