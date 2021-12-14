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
				<p className="px-6 py-1 text-lg italic"> I had my first rafting experience with AquaXtreme on the Jatun Yacu river, and it was absolutely amazing! Our guides were skilled and professional, but they were also a lot of fun. We experienced many class III and III+ rapids over the course of our journey, and the river conditions couldn't have been better. The guides got great action pictures, and even prepared a nice lunch for us afterward. Absolutely fantastic experience! [Visited May 2016]</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="opacity-30 absolute -bottom-1 -right-1 w-8 h-8 text-coolGray-300">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
			<p>Shane7770</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="opacity-30 absolute -top-1 -left-1 w-8 h-8 text-coolGray-300">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">The best rafting tour we ever made. We were traveling with 3 people, and the tour was the 3 of us only in a little boat. We are experienced paddlers and were rafting in New Zealand, Colombia, Austria etc. this was top notch. The guide Amaru was professional and experienced with the river. We had 4 hours of pure rafting. The tour in total took us 6-7 hours. Lunch prepared by the 2 guides (additional safety kayak) was very good. The landscape was fantastic and super remote, we met 5 other people the whole day. The trip as worth every cent.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="opacity-30 absolute -bottom-1 -right-1 w-8 h-8 text-coolGray-300">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
			<p>Tillitos Stuttgart, Germany</p>
		</div>
	</div>
</section>
    )
}

export default Testimonials
