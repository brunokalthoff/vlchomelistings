import styles from '../../styles/home/Testimonials.module.css'
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

function Testimonials() {
    const constraintsRef = useRef(null)
    const innerRef = useRef(null)
    const [width, setWidth] = useState(null)

    useEffect(() => {
        setWidth(constraintsRef.current.clientWidth - innerRef.current.clientWidth);
    }, []);

    const testimonials = [
        {
            name: <>Frank Berkin</>,


            text: <>We had a great opportunity to work with Jerry buying our first home last year. He helped us establish our needs and wants, then began to involve us in the search for suitable properties. Jerry was very knowledgeable about the region and the communities we were seeking. He was always quick to respond to any concerns we had, readily available for appointments, and quick to solve any conflicts we had along the way. Overall a great experience. We highly recommend Jerry!

                Thanks so much for helping us find our home!
            </>,
        },

        {
            name: <>Scoot Rees</>,


            text: <>Jerry and team are amazing! I couldn&apos;t have hoped for a better experience with the purchase of my first home. Every question answered and info provided for questions I didn&apos;t even know to ask. Dedicated. Committed to my requirements. Knowledgeable beyond belief. Professional. And most importantly....made me feel comfortable and as though I have made new friends. In fact the first home warming gift I received.....was from Jerry himself! Can&apos;t thank them enough. Amazing!</>,
        },

        {
            name: <>Sheri Frances</>,


            text: <>We had a great opportunity to work with Jerry buying our first home last year.  He helped us establish our needs and wants, then began to involve us in the search for suitable properties. Jerry was very knowledgeable about the region and the communities we were seeking.    He was always quick to respond to any concerns we had, readily available for appointments, and quick to solve any conflicts we had along the way.   Overall a great experience. We highly recommend Jerry!
                Thanks so much for helping us find our home!
            </>,
        },
     
        {
            name: <>Eleanor Rightmeyer</>,


            text: <>We had the pleasure of working with Graham. This was our first home
                purchase and he was very helpful in many ways. He was fast in setting up
                viewings (even during COVID) and he knows the properties/areas really well.
                We were lucky enough to get the first house that we made an offer on.
                Graham made our short lived search really easy and encouraged us to make an
                offer if it felt right to us.</>,
        },

      

        {
            name: <>Lin Jacques</>,


            text: <>Just sold my house with Van Leeuwen Real Estate Advisors and could not be happier. Jerry and Alissa could not have been more professional, helpful and genuinely excited for me. The stress of selling your home evaporated when I started working with Van Leeuwen Real Estate. I could not be happier with the service and attention to detail. And my home sold in 5 days, over asking!! I would highly recommend this team. Thank you Jerry and Alissa!</>,
        },
        {
            name: <>Marcy Lucy Sant&apos;Ana</>,


            text: <>A big thanks to Jerry and his team for the amazing work of selling my house in Waterloo. He is honest, hard-working and always goes the extra mile to get the job done well!</>,
        },

        {
            name: <>Shelby Standring</>,


            text: <>We had a great experience working with the Van Leeuwen team! Always professional, quick to respond and so friendly - we have zero complaints. We received more for our place than anticipated and are moving into the house of our dreams. Thank you so much Jerry, Graham and Crystal, you guys rock!</>,
        },

        {
            name: <>Cam</>,


            text: <>We were not in much of a hurry to buy something or sell our home. When Jerry found us the perfect house to purchase, he proved to us that he knew what to do to sell our townhouse quickly, and get top dollar for it.

                He walked us through the process of getting our house on the market quickly and at an appropriate asking price. He was able to arrange a qualified pre-inspection of our property and an efficient, professional staging consultation.

                We sold our townhouse in under 72 hours for more than $20,000 over our asking price!</>,
        },

   
        {
            name: <>Shelli Patricia Moti</>,


            text: <>Me and my husband Being first time home buyers, we were a little intimidated at first. Luckily we found Graham Little from Van Leeuwen Real Estate who made the process much easier than we had been anticipating. Any questions we had were answered quickly and efficiently. We both are very happy with our first home and couldn&apos;t have been more pleased with the service. We thank you for the time and effort you spent with us, making our first experience as easy as it was! We will definitely recommend Your service to anyone and would not hestiate to use again for ourselves.</>,
        },

        {
            name: <>Julie Farkas-Pahor</>,


            text: <>The entire team at Van Leeuwen Realtor are extremely knowledgeable and professional.  We used them to sell our home in Baden and purchase our new beautiful home in Kitchener.  Our thanks goes out to Jerry and his team for taking such good care of us. Should we move again, they would be our only choice for our real estate needs.</>,
        },
        {
            name: <>Karen Colalilo</>,


            text: <>We had the pleasure of working with Graham. He was amazing and very knowledgeable. He was very quick to answer all our calls and available to get us into showings. He wasn&apos;t out to sell us any home, he wanted to find us the perfect home and he did! I would highly recommend Van Leeuwen Real Estate!</>,
        },
        {
            name: <>Veronica Best</>,


            text: <>We had the pleasure of working with Graham for the purchase of our first home, again with the sale of that home and now the purchase of a new dream home.  He is approachable, knowledgeable and reliable. Everything you want in a realtor.
                He is also a part of an incredible team, like Allisa, who helped make selling our home much easier. I  highly recommend them if you want a great experience with friendly faces and people who get the job done.
                Thank you,
            </>,
        },
        {
            name: <>Jeremey Hetherington</>,


            text: <>My experience with The Team from Keller was excellent. It&apos;s hard to imagine how easy it is to sell a home in these times. We sold in 5 days after receiving multiple offers all prior to the actual offer acceptance date for more than our asking price. I&apos;m very happy and would recommend Trevor as an agent to anyone who asks.
                Jeremy
            </>,
        },
        {
            name: <>David C.</>,


            text: <>I had the privilege to have Graham as my realtor who helped me find a beautiful home. Needless to say, I will NOT be searching for any other real estate agent in the future!</>,
        },
        {
            name: <>Heinz Hribernig</>,


            text: <>We were so blessed, that we used the service from Keller Williams provided  from Graham Little and Jackie McDonalds for our  30. long distance move to Cambridge. They made the purchase for us so easy and smooth,they even help us  to find a Cleaning Lady, Fam Doctor and Contractors.
                Thank you guys for your caring service and we can and will defiantly recommend to everyone  this company who needs  a new place.
            </>,
        },
        {
            name: <>Sina Mahmoudzadeh</>,


            text: <>I had the opportunity to work with Van Leeuwen Real Estate Advisors purchasing my first house. I worked with Jerry, Graham, and Crystal, and they were with me all the way during the process of purchasing the house. The team is kind, friendly, responsive, and patient. I would certainly recommend.</>,
        },
        {
            name: <>James Towle</>,


            text: <>Went through Van Leeuwen Real Estate Advisors when I purchased my first house moving to Guelph. Jerry is very knowledgeable and patient when it came to finding my home. Made the entire process very smooth.</>,
        },
        {
            name: <>OTBx Air Support</>,


            text: <>Jerry and his team are great to work with and bring a fresh perspective to real estate.  They are committed to working hard for their clients and go above and beyond</>,
        },
        {
            name: <>Neala Taylor</>,


            text: <>Jerry was helpful with our house sale and our search for a new home.  There were many ups and downs due to one sale falling through and trying to resell and not losing the property we wanted to buy.   Jerry was always as close as the phone and aided us in anyway he could.  Enjoy the socks!!!
                Thank you to his team for their time spent helping as well!
            </>,
        },

        {
            name: <>Kyle Ueber</>,


            text: <>Thanks to Jerry Van Leeuwen and his team for selling my rental property. The house was only on the market for a couple weeks before we were able to sell it for a record setting price in that complex. Jerry is dedicated and really went the extra mile to get this house sold, including hosting an open house on his birthday. I&apos;d highly recommend Jerry Van Leeuwen  Real Estate Advisors if you are looking to sell your home.</>,
        },

        {
            name: <>Francisco Medina</>,


            text: <>An outstanding negotiator, Jerry sold our house in a record 2 days on the market and well above the asking price!!! He handled the transaction efficiently and so easy for us senior clients to follow. Congratulations to you and your Jerry Vanleeuwen golden team. We strongly recommend your professional services to our friends and family. Hardworking , friendly and well organized. Kudos to your great team. And thank you so much for helping us out of a desperate situation</>,
        },
        {
            name: <>Paige Linklater</>,


            text: <>Graham was amazing, This was our first time buying a home. The experience was still daunting in terms of the decisions we had to make along the way, however, Graham had always assisted us in putting things in perspective and helping us to figure out what would work best for our first family home.

                My partner and I had a short window to search for a home, in which we didn&apos;t even think would be possible. Graham was always available to take on our questions, squeeze us into showings and even assist with the closing details and connecting us with a reputable home inspector.
            </>,
        },
        {
            name: <>Matthew Kieswetter</>,


            text: <>We are so pleased with our experience, having worked with Graham Little of Van Leeuwen Real Estate Advisors on the purchase of our first house. Graham helped us through every step of the way, and very quickly got a feel for the type of house we were looking for. We were especially impressed at how he helped guide us on our visits to houses, as he very carefully checked things like wiring, foundations, and other items beyond our expertise. We are 100% satisfied.</>,
        },
        {
            name: <>Rebecca Kruisselbrink</>,


            text: <>Fantastic first home buying experience!  Jody and Graham were amazing, professional, on top of everything, and made the whole experience as smooth as possible.  Thanks so much guys!</>,
        },
        {
            name: <>Karen Colalillo</>,


            text: <>The Van Leeuwen Real Estate group were instrumental in finding our new home here in Kitchener.  Working with Graham Little was education as well as the reason we were able to find a home...his experience with the areas we looked was helpful in determining if the home was right for us...he gave us his expert opinion and was not afraid to tell us whether we should put an offer in or not; he did not try to sell a home, he tried to find us the perfect home for us...and he did.  He continues to keep in touch with us regarding any issues or assistance we may need for our new home.</>,
        },
        {
            name: <>Mehrdad Pirnia</>,


            text: <>Jerry helped us to buy our first house 5 years ago, and now he helped us to transition into our new home. Jerry and Jody helped us through every step of our house purchase and house sale.  They were friendly, responsive and very professional. They are knowledgeable of the housing market, and we cannot find anybody to trust more then them!</>,
        },
        {
            name: <>Sandra Elliott-Tulloch</>,


            text: <>We just sold our home in record time!! We couldn&apos;t be happier. From day 1 Jerry was right there for us and the whole process was effortless on our part. His whole team is outstanding!! Thanks to all!! Now we are looking forward to finding our new nest!! With Jerry&apos;s  guidance I&apos;m sure we will find our perfect place.</>,
        },
        {
            name: <>Gillian Inksetter</>,


            text: <>We could not have had a better experience with the VanLeeuwen team! Every step of the way they were supportive and responsive. They helped us sell our house quickly and found us our dream home. Heartfelt thanks and gratitude to Trevor, Jerry, and Jody, and everyone they connected us with!</>,
        },
        {
            name: <>Lorraine Cotterill</>,


            text: <>Liam Webster is the bomb!!! He helped us navigate this difficult time of selling our house and finding a new one!! Without him and AllIssa Vincent&apos;s&apos; help we would have been lost. They were there for us at any time day or night to calm our nerves. They are friendly but professional and very knowledgeable!! Thanks again you guys!!!</>,
        },
        {
            name: <>William Chan</>,


            text: <>As a first time home buyer, I did not know what to expect. Luckily I had Graham as my real estate agent. He walked us through the process from start to finish, was available at every step of the way (even on weekends and weekday evenings), and kept us calm in what can often be a stressful time. In the end, his experience was second to none and we not only found a house that we liked, but put down an offer that we thought was reasonable and fair. I would have no hesitation recommending him and without a whim work with him again.</>,
        },
        {
            name: <>Daryl A.</>,


            text: <>Thank you Liam in helping find us a home. Definitely the hardest working realtor I&apos;ve met..answering my calls, emails and texts at all hours and days. Also Liam was great at providing me another prospective as a buyer.

                Also, big thanks to the team of Alissa, Liam, and Jerry listing my condo and getting well over what I thought I would get. Alissa is a fantastic client care coordinator making this transition seamless. Jerry is awesome bringing a buyer within 48hrs, didn&apos;t have to go through the hassle of listing.

                Highly recommend this team. :)
            </>,
        },
        {
            name: <>Sandra Elliott Tulloch</>,


            text: <>We just sold our home in record time!! We couldn&apos;t be happier. From day 1
                Jerry was right there for us and the whole process was effortless on our
                part. His whole team is outstanding!! Thanks to all!! Now we are looking
                forward to finding our new nest!! With Jerry&apos;s guidance I&apos;m sure we will
                find our perfect place.</>,
        },

        {
            name: <>Rebecca Kruiselbrink</>,


            text: <>Fantastic first home buying experience! Jody and Graham were amazing,
                professional, on top of everything, and made the whole experience as smooth
                as possible. Thanks so much guys!</>,
        },
        {
            name: <>Mehrdad Pirnia</>,


            text: <>Jerry helped us to buy our first house 5 years ago Jerry and Jody helped us through every step
                of our house purchase and house sale. They were friendly, responsive and
                very professional. They are knowledgeable of the housing market, and we
                cannot find anybody to trust more then them!</>,
        },
        {
            name: <>Lynn & Maurice Landriault</>,


            text: <>My husband and I had the privilege of working with Graham Little as our advisor. Having never bought or sold a home, Graham facilitated our move from Northern Ontario to Southern Ontario with patience, sensitivity and professionalism. We knew we were in very competent hands. After many months and several trips, we found our perfect home. We would not hesitate to contact Van Leeuwen Real Estate Advisors for future real estate needs. Thank you!</>,
        },
        {
            name: <>Wesley Greenwood</>,


            text: <>Jerry and Jody made selling our home easy.

                They modified their level of service to fit exactly what we needed, at a price that was fair and affordable.

                They were always quick to respond to our calls and emails.

                Their integration with the latest in communication and coordinating technologies made selling our home easy, even during the trying times of this corona virus outbreak.

                Thank you for your help!</>,
        },
        {
            name: <>Karen Colalillo</>,


            text: <>We had the pleasure of working with Graham. He was amazing and very knowledgeable. He was very quick to answer all our calls and available to get us into showings. He wasn&apos;t out to sell us any home, he wanted to find us the perfect home and he did! I would highly recommend Van Leeuwen Real Estate!</>,
        },
        {
            name: <>Franscisco Medina</>,


            text: <>An outstanding negotiator, Jerry sold our house in a record 2 days on the market and well above the asking price!!! He handled the transaction efficiently and so easy for us senior clients to follow. Congratulations to you and your Jerry Vanleeuwen golden team. We strongly recommend your professional services to our friends and family. Hardworking , friendly and well organized. Kudos to your great team. And thank you so much for helping us out of a desperate situation.</>,
        },
        {
            name: <>Patricia Basdeo Moti</>,


            text: <>Me and my husband Being first time home buyers, we were a little intimidated at first. Luckily we found Graham Little from Van Leeuwen Real Estate who made the process much easier than we had been anticipating. Any questions we had were answered quickly and efficiently. We both are very happy with our first home and couldn&apos;t have been more pleased with the service. We thank you for the time and effort you spent with us, making our first experience as easy as it was! We will definitely recommend Your service to anyone and would not hestiate to use again for ourselves.</>,
        },
        {
            name: <>Scott Rees</>,


            text: <>Jerry and team are amazing! I couldn&apos;t have hoped for a better experience with the purchase of my first home. Every question answered and info provided for questions I didn&apos;t even know to ask. Dedicated. Committed to my requirements. Knowledgeable beyond belief. Professional. And most importantly....made me feel comfortable and as though I have made new friends. In fact the first home warming gift I received.....was from Jerry himself! Can&apos;t thank them enough. Amazing!</>,
        },
        {
            name: <>Julie Farkas- Pahor</>,


            text: <>The entire team at Van Leeuwen Realtor are extremely knowledgeable and professional. We used them to sell our home in Baden and purchase our new beautiful home in Kitchener. Our thanks goes out to Jerry and his team for taking such good care of us. Should we move again, they would be our only choice for our real estate needs.</>,
        },
        {
            name: <>Chris Pinnock</>,


            text: <>Worked with Graham Little when buying my first home and was greatly impressed by his and work ethic and the assistance he provided was invaluable. Recently, when I had a difficult property to sell, I thought of Graham and the team at Van Leeuwen Real Estate and wow what a great decision! Quick and painless sale. I couldn&apos;t be happier with the service and level of commitment they provided. Will use again, highly recommend.</>,
        },
        {
            name: <>Paige Nicole</>,


            text: <>We had the pleasure of working with Graham to search for our first family home. He was absolutely amazing throughout the process. He was able to put difficult choices into perspective. Graham was constantly available to take on our questions, squeeze us into showings and even help us with our closing process when he was on vacation. Graham had really gone above and beyond and I couldn&apos;t recommend a better realtor.</>,
        },
        {
            name: <>Kyle Ueber</>,


            text: <>Thanks to Jerry Van Leeuwen and his team for selling my rental property. The house was only on the market for a couple weeks before we were able to sell it for a record setting price in that complex. Jerry is dedicated and really went the extra mile to get this house sold, including hosting an open house on his birthday. I&apos;d highly recommend Jerry Van Leeuwen Real Estate Advisors if you are looking to sell your home.</>,
        },
        {
            name: <>Anita Araujo</>,


            text: <>We had the pleasure of working with Jerry to sell our home. He went above and beyond for us. Always kept us in the loop and was quick to respond to any questions or concerns we had.. If your thinking of buying or selling please give him a chance you won&apos;t regret it .Thanks Jerry for getting our house SOLD.</>,
        },
        {
            name: <>Sheri Keane</>,


            text: <>We had a great opportunity to work with Jerry buying our first home last year. He helped us establish our needs and wants, then began to involve us in the search for suitable properties. Jerry was very knowledgeable about the region and the communities we were seeking. He was always quick to respond to any concerns we had, readily available for appointments, and quick to solve any conflicts we had along the way. Overall a great experience! We highly recommend Jerry!
                Thanks so much for helping us find our home!</>,
        },
        {
            name: <>Deb Stack</>,


            text: <>This is a thank you note to Jerry for his hard work in making our forever home possible. He totally understands customer service and delivered on that. His eye for detail and advisement to us whenever required, made our days through this process very smooth. There were lots of bumps, but we felt that he had our backs; that is a lot. We will definitely recommend  Jerry and wish him all the best in his endeavors.</>,
        },
        {
            name: <>Caroline Aweh</>,


            text: <>I met Graham about two months ago, online, was at first reluctant to work with him, but as fate would have it, he turned out to be the best decision I have made in a long time. Graham was quick to understand my needs and steer me in the right direction. His professionalism, patience, and warmth made the process of finding a suitable home a lot less stressful than it could have been.

                I felt comfortable asking for his opinion, and I&apos;m happy to say he got me exactly what I need, despite my budget constraint. Thank you Graham!</>,
        },
        {
            name: <>Shelby Standring</>,


            text: <>We had an excellent experience working with the Van Leeuwen team. Graham and Jerry were awesome to work with- always professional, friendly and quick to respond. We highly recommend the Van Leeuwen team for all your buying and selling needs.</>,
        },
        {
            name: <>Mary Lucy Sant</>,


            text: <>A big thanks to Jerry and his team for the amazing work of selling my house in Waterloo. He is honest, hard-working and always goes the extra mile to get the job done well! They always go the extra mile!!</>,
        },
        {
            name: <>Naela Taylor</>,


            text: <>Van Leeuwen Advisors was helpful with our house sale and our search for a new home. there were many ups and downs due to one sale falling through and trying to resell and not losing the property we wanted to buy. Jerry was always as close as the phone and aided us in anyway he could. Enjoy the socks!
                Thank you to his team for their time spent helping as well!</>,
        },
        {
            name: <>Frank Berkin</>,


            text: <>Excellent Agency, Van Leeuwen Advisors. Like the fact that both a stager and inspection were part of the package. Helped make a quick sale on a difficult property. Already made a referral ( daughter). Couldn&apos;t be more pleased with the service. Food delivery on moving was a pleasant surprise!</>,
        },




    ]

    return (
        <>
            <div className={styles.headline}>
                <h2>Testimonials.
                    <span> What our clients say about us.</span>
                </h2>
            </div>

            <div ref={constraintsRef} className={styles.container}>
                <motion.div ref={innerRef} initial={{ x: 0 }} animate={{ x: width }} transition={{ repeat: Infinity, repeatType: "reverse", delay: 5, duration: -width * 0.08, ease: "linear" }} drag="x" dragConstraints={constraintsRef} whileDrag={{ scale: 1.01 }} className={styles.inner}>
                    {testimonials.map((item, key) => {
                        return (
                            <div key={key} className={styles.card}>
                                <ImQuotesLeft />
                                <h6> {item.text} </h6>
                                <h5> {item.name} </h5>
                            </div>
                        )
                    })}

                </motion.div>
            </div>
        </>
    );
}

export default Testimonials;