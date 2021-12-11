import React from 'react'
import Separator from '../components/section-separator'


function Testimonials() {
    return (
        <section className="my-8">
            <Separator />
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-semibold leading-none text-center">What our clients have to say</h1>
	</div>
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="opacity-30 absolute -top-1 -left-1 w-8 h-8 text-neutral-50">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">My business, Senior Travel Companion Serviecs, LLC, involves taking seniors and disabled individuals on trips. I brought Elizabeth to Ecuador and the Galapagos to experience the flora and fauna she craved. Our tour guide, Latin America for All, arranged a rafting trip with AquaExtreme and it was the highlight of our trip! Danny and Giovanni strapped Elizabeth's chair to the raft, gave her a paddle, and we spent the afternoon safely navigating easy and class 3 rapids and enjoying the beautiful Napo river. The shore lunch was terrific as well. In the safety kayak, Giovanni entertained us with tricks and in our raft, while Danny identified what we were seeing, as well as comfortably guiding us down the river. Elizabeth is unable to walk on her own, but on that special day, she had the adventure of a lifetime!</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="opacity-30 absolute -bottom-1 -right-1 w-8 h-8 text-coolGray-300">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
			<p>Carol G. on Tripadvisor</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="opacity-30 absolute -top-1 -left-1 w-8 h-8 text-coolGray-300">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">Our guides were Daniel and Dannie. They were both terrific, with Daniel leading the charge, speaking I’m both English and Spanish so all could understand. They catered to our needs and did the trip early as we had to get back to town by one. I’m the first set of caves used for traditional ceremonies we saw bats, fish and sparkling minerals. There was water. So don’t expect to stay dry or clean. just be aware there’s were some tight spaces ( don’t take backpacks)and a fairly steep accent at the end.
Then we walked through the jungle, saw some inter rock features and walked through a rock maze. There we also some rocks that were used as tables to create bush medicine.
We ended with another cave which had a lot of water in it and was lots of fun as well as challenging. The guides were very encouraging.
A great way to spend the morning.
Thank you for an unforgettable experience.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="opacity-30 absolute -bottom-1 -right-1 w-8 h-8 text-coolGray-300">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
			<p>Merlene on Tripadvisor</p>
		</div>
	</div>
</section>
    )
}

export default Testimonials
