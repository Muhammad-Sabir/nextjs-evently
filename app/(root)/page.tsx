import Hero from '@/components/shared/Hero';

export default function Home() {
	return (
		<>
			<section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
				<Hero />
			</section>

			<section
				id="events"
				className="wrapper my-8 flex flex-col gap-8 md:gap-12"
			>
				<h2 className="h2-bold">
					Trust by <br /> Thousands of Events
				</h2>

				<div className="flex w-full flex-col md:flex-row gap-5">
					Search Catergory
				</div>
			</section>
		</>
	);
}
