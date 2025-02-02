// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

export const RoadmapView: FC = ({ }) => {

 
  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
	        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
	          Roadmap
	        </h1>
        </div>



        <div className='mt-6 text-center'>
          
          <div className="title-block rainbow-letters-6" >Short term</div>
			<h3 className="rainbow-letters-4">Humor as a Tool <i className="em em-joy" aria-role="presentation" aria-label="FACE WITH TEARS OF JOY"></i></h3>
			Use humor to capture people&#39;s interest and attention, enabling us to spread information and increase awareness about Down syndrome in an engaging manner. Humor can be used to break down barriers and create a more inclusive dialogue on the subject.
                      
 			<h3 className="rainbow-letters-5">Social Media Identity <i className="em em-heart" aria-role="presentation" aria-label="HEAVY BLACK HEART"></i></h3>
			Establish a clear, cohesive, and powerful presence on social media with a username like RUdown. Use the catchphrase &quot;We are down #RUdown?&quot; as a tagline to resonate with the audience, inviting them to share and engage in our mission to improve the quality of life for people with Down syndrome. This slogan is both a call to action and an invitation to community, where humor and positivity are used as tools to break down barriers and build bridges.

			<h3 className="rainbow-letters-6">Brand Strength <i className="em em-muscle" aria-role="presentation" aria-label="FLEXED BICEPS"></i></h3>
			Ensure that the brand identity is consistent across all digital platforms, creating a professional image while skillfully balancing it with a humorous tone that makes the brand both memorable and loveable. This is key to maintaining a serious and respectful approach to Down syndrome while using humor as a tool for inclusion and engagement.


		</div>

		<div className="mt-6 text-center">
                        <div className="title-block rainbow-letters" >Mid term</div>
			<h3 className="rainbow-letters-2">Tokenomics <i className="em em-moneybag" aria-role="presentation" aria-label="MONEY BAG"></i></h3>
			Implement a token-based fundraising model where crowdfunding is combined with the RUdown token. By matching the collection according to the token&#39;s market value at the time of donation, the system reduces the risk of market manipulation and creates a more reliable fundraising environment. A higher market value for the RUdown token also enables larger donations.

			<h3 className="rainbow-letters-3">Personal Fundraising <i className="em em-medal" aria-role="presentation" aria-label=""></i></h3>
			Create a user-friendly portal where various groups such as residences, daily activities, or individuals with Down syndrome can start fundraisers. These can seek funding for a wide range of needs, including computers, travel, sewing machines, sports equipment, or anything that can improve their quality of life. Each fundraiser should include a story about the individual or group, with the opportunity to follow their journey through pictures or video clips, making the fundraising more personal and engaging.

			<h3 className="rainbow-letters-4">Foundation Establishment <i className="em em-male-student" aria-role="presentation" aria-label=""></i></h3>
			Establish a fund where we choose to support selected projects, innovative research, or outstanding individuals making a difference in the field of Down syndrome. The fund is dedicated to promoting research, education, and improvements in quality of life, with the aim of recognizing and aiding those making significant efforts to change and enhance the lives of people with Down syndrome.
			
			<h3 className="rainbow-letters-5">Collaboration <i className="em em-handshake" aria-role="presentation" aria-label="HANDSHAKE"></i></h3>
			Seek partnerships with organizations working for the rights of people with Down syndrome, where we not only collaborate to increase the spread of the initiative but also leverage their creativity and innovation for new ideas that can help the project expand. Engage individuals with larger platforms who want to be part of this charity train to maximize our reach and impact.

			<h3 className="rainbow-letters-6" >Airdrops <i className="em em-droplet" aria-role="presentation" aria-label="DROPLET"></i></h3>
			Exclusive Rewards for Loyalty. Air drop tokens or NFTs to those staking or holding long-term, fostering community loyalty. By collaborating with other crypto companies, holding our token could also grant access to unique air drops from these partners, enriching the benefits for our community

			<h3 className="rainbow-letters-7">Merch <i className="em em-socks" aria-role="presentation" aria-label="SOCKS"></i> <i className="em em-shirt" aria-role="presentation" aria-label="T-SHIRT"></i></h3>
			Custom Designs with Awareness Motifs: Offer clothing lines with uniquely creative designs inspired by the awareness motifs we share on social media. The catchphrase &quot;RUdown&quot; has become a recognizable symbol. Include items like mugs, rock the socks, and other accessories, all echoing our mission and engaging supporters in a fun, inclusive way.

        </div>
			
 		<div className="mt-6 text-center">
            <div className="title-block rainbow-letters-5">Long term</div>
			<h3 className="rainbow-letters-2">Global Research on Down Syndrome <i className="em em-female-scientist" aria-role="presentation" aria-label=""></i> <i className="em em-earth_americas" aria-role="presentation" aria-label="EARTH GLOBE AMERICAS"></i></h3>
			Conduct a study to see how Down syndrome is met around the world, with a special focus on poorer countries. Then analyze how to spread the right education and information to improve living conditions, understanding, and integration in these societies.

			<h3 className="rainbow-letters-3">Global Expansion <i className="em em-earth_africa" aria-role="presentation" aria-label="EARTH GLOBE EUROPE-AFRICA"></i> <i className="em em-chart_with_upwards_trend" aria-role="presentation" aria-label="CHART WITH UPWARDS TREND"></i></h3>
			Expand our initiatives and collaborations globally, with a careful strategy to adapt our methods to the varying cultural and socio-economic contexts we encounter. This means tailoring our approach to effectively support Down syndrome initiatives worldwide, while respecting and understanding local traditions, challenges, and opportunities. Our goal is to create a global community that shares knowledge, resources, and successful strategies to improve quality of life, promote inclusion, and raise awareness about Down syndrome in every corner of the world.

			<h3 className="rainbow-letters-4">Campaign for &quot;Rock the Socks&quot; <i className="em em-socks" aria-role="presentation" aria-label="SOCKS"></i></h3>
			Strengthen and expand the visibility and influence of the &quot;Rock the Socks&quot; movement by coordinating our running event on the same day as &quot;World Down Syndrome Day,&quot; March 21 each year. Through this strategic coordination, we aim to maximize engagement and raise awareness about Down syndrome on a global scale.

			<h3 className="rainbow-letters-5">Run for Awareness <i className="em em-man-running" aria-role="presentation" aria-label=""></i></h3>
			Organize a running event where participants run to raise awareness about Down syndrome. Incorporate humor into the event to make it a festive and welcoming experience for all participants, regardless of their running ability.

			<h3 className="rainbow-letters-6">Down Syndrome Advocacy Awards <i className="em em-boy" aria-role="presentation" aria-label="BOY"></i> <i className="em em-first_place_medal" aria-role="presentation" aria-label="FIRST PLACE MEDAL"></i></h3>
			Introducing the &quot;Down Syndrome Advocacy Awards&quot; to celebrate those who&#39;ve made a significant impact through advocacy, innovation, and inspiration. Nominate individuals or organizations via our website or with #DSSpiritAward on social media. We&#39;re looking for impactful, innovative, and inspiring contributions. Let&#39;s honor the change-makers!
			

			<h3 className="rainbow-letters-7">Establish Daily Activities in Underserved Regions <i className="em em-house" aria-role="presentation" aria-label="HOUSE BUILDING"></i></h3>
			Our goal is to develop daily activity centers or similar support structures in countries where there is little to no governmental or institutional safety net for individuals with Down syndrome, ensuring they have access to programs that promote independence, social engagement, and personal development. All progress and daily life insights can be tracked on social media or through a vlog-style feature on our website.

          
        </div>
      </div>
    </div>
  );
};




