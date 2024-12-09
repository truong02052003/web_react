import { Link } from 'react-router-dom';
import styles from './home.module.css'; // Import CSS Modules

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function HomeBlog() {
    return (
        <div>
            <section className={styles.body}>
                <button onClick={topFunction} id="myBtn" title="Go to top">
                    <i className="bi bi-caret-up-fill"></i>
                </button>
                <div className={styles.thumbnail}>
                    <img src="images/logonew3.jpg" alt="Slogan" className={styles.bodyImg} />
                    <div className={styles.text}>
                        <h1 className={styles.slogan}>EVERY DROP COUNTS</h1>
                        <p className={styles.bodyP}>Join us to save water today!</p>
                    </div>
                </div>
            </section>

            <section className={styles.body}>
                <div className={styles.intro}>
                    <h1 className={styles.introH1}><b>What is Rainwater Harvesting?</b></h1>
                    <p className={styles.introP}>
                        <b>Rainwater Harvesting</b> is a technology used to collect, convey, and store rainwater from relatively clean surfaces like the roof, rock catchment, or land surface &minus; essentially for later use.
                        This collected rainwater is either directed to recharge groundwater or stored in a rainwater tank. <br /><br />
                        <b>Rainwater Harvesting</b> isn&#39;t some modern technology, it has been practiced for over 4000 years throughout the world. Traditionally in arid and semi-arid areas, rainwater harvesting systems have provided water for domestic use, drinking, livestock, and small irrigation purposes. Today, rainwater harvesting is gathering a lot of significance as a modern, water−saving and simple technology.
                    </p>

                    <img src="images/explain.jpg" alt="Explanation" className={styles.introImg} />
                    <p className={styles.introP}>
                        Rainwater is one free water source and comparatively clean; with proper treatment, it can be used for several non-potable uses. <b>Rainwater Harvesting</b> not only relieves the pressure on sewers and the environment by mitigating floods, soil erosions, and replenishing groundwater levels, but also helps in reducing the consumption of potable water. <br /><br />
                        There are so many reasons why we should start collecting rainwater. From doing our part for the environment and saving money on water bills to having constant access to water <span>&minus;</span> collecting rainwater can be beneficial in so many ways.
                    </p>
                    <img src="images/RT130.jpg" alt="Explanation" className={styles.introImg} />
                </div>


                <div className={styles.benefits}>
                    <h1 className={styles.benefitsH1}>The benefits of using Rainwater:</h1>
                    <ul >
                        <li className={styles.benefitsLi}>Reduce water bills</li>
                        <li className={styles.benefitsLi}>Chemical-free</li>
                        <li className={styles.benefitsLi}>Maintain a green, healthy garden</li>
                        <li className={styles.benefitsLi}>Good for skin and hair</li>
                        <li className={styles.benefitsLi}>High self-sustainability</li>
                        <li className={styles.benefitsLi}>Provide an alternative supply during water restrictions</li>
                        <li className={styles.benefitsLi}>Decreases storm water runoff</li>
                        <li className={styles.benefitsLi}>Helps reduce local flooding and scouring of creeks</li>
                    </ul>
                    <img src="images/benefits.jpg" alt="Benefits" className={styles.benefitsImg} />
                </div>

                <div className={styles.methods}>
                    <h1 className={styles.methodsH1}>Available harvesting techniques</h1>
                    <p className={styles.methodsP}>
                        It is simple to collect rainwater from building roofs and numerous other sources.
                        As long as you are ready and equipped with a couple of different items,
                        you have all that it takes to begin rainwater harvesting and enjoying naturally
                        delicious, clean, and useful water.
                        <strong> Rainwater harvesting systems </strong> can be purchased complete from
                        various home improvement stores. The cost of these systems will vary.
                    </p>

                    <p className={styles.methodsP}>
                        Below are some of the <strong>techniques</strong> for rainwater harvesting, which
                        will be explained in detail in the{' '}
                        <strong>
                            <Link to="/methods" title="Go to page?" className="text-dark">
                                Methods webpage
                            </Link>
                        </strong>:
                    </p>
                    <p className={styles.methodsP}><b>1. Rainwater Barrels:</b> <br></br><br></br> The easiest and cheapest way to start harvesting rainwater in your home. A barrel is simply installed underneath the downspout of the guttering so that rain falling on the roof is funneled into the barrel.</p>
                    <img src="images/rainwater_barrell.webp" alt="Rainwater Barrel" className={styles.methodsImg} />

                    <p className={styles.methodsP}><b>2. Dry System:</b><br></br><br></br> A well-known method of rainwater harvesting. It<span>&#39;</span>s basically an improvement to the rainwater barrel technique in terms of size.</p>
                    <img src="images/Camera Roll/1280px-Rainwater_harvesting_systems_in_Kiribati_(10715703914).png" alt="Dry System" className={styles.methodsImg} />

                    <p className={styles.methodsP}><b>3. Wet System:</b> <br></br><br></br> The exact opposite of the dry system. This is because the collection pipes are located underground and always full of water.</p>
                    <img src="images/Camera Roll/wet-vs-dry-system.png" alt="Wet System" className={styles.methodsImg} />

                    <p className={styles.methodsP}><b>4. Green Roof:</b><br></br><br></br>Instead of directing rainwater for storage in the tank and then channel it to the garden, you could install a green roof on your house to enable plants to use the water instantly.</p>
                    <img src="images/Camera Roll/eco_friendly_sky_garden_home.png" alt="Green Roof" className={styles.methodsImg} />

                    <p className={styles.methodsP}><b>5. Retention Ponds:</b><br></br><br></br> Retention ponds are used to collect surface runoff water and can be used for groundwater recharge, irrigation or any other purpose other than potable uses.</p>
                    <img src="images/Camera Roll/csm_Rural21_1_2020_S12_f52be6dbc2.png" alt="Retention Ponds" className={styles.methodsImg} />

                    <p className={styles.methodsP}><b>6. Permeable Pavers:</b><br></br><br></br> A Permeable Pavement stormwater runoff system stores water by allowing stormwater runoff to infiltrate through porous surfaces into a storage reservoir.</p>
                    <img src="images/Camera Roll/pavement.png" alt="Permeable Pavers" className={styles.methodsImg} />
                </div>
                <div class="members">
                    <h1>Website Creators</h1>
                    <p>	Vu Ha Anh - Student1339033</p>
                    <p>	Mai Van Truong - Student1511447</p>
                    <p> Do Thi Phuong Thuy - Student1518748</p>
                    <p>	Phan Quang Truong - Student1527770</p>
                    <p> Le Quang Tinh - Student1521817</p>
                </div>
            </section>
        </div>
    );
}
