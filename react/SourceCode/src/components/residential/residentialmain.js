import styles from './residential.module.css';

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ResidentialBlog() {
    return (
        <div>
            {/* Nút cuộn lên đầu trang */}
            <button onClick={topFunction} id="myBtn" title="Go to top">
                <i className="bi bi-caret-up-fill"></i>
            </button>

            {/* Phần Thumbnail */}
            <div className={styles.resThumbnail}>
                <img src="images/Camera Roll/Kingspan-Gamma-rainwater-harvesting.jpg" className="w-100" alt="Rainwater Harvesting" />
                <p className={styles.resThumbnailP}><i>An Overview of Residential Rainwater Harvesting</i></p>
                <h1 className={styles.resThumbnailH1}>RAINWATER HARVESTING IN RESIDENTIAL AREA</h1>
            </div>

            {/* Phần Introduction */}
            <div className={styles.resIntro}>
                <p className={styles.resIntroP}>
                    <b>Rainwater Harvesting</b> is emerging as an intelligent option for water supply in residential, commercial, and agriculture applications, and it couldn&apos;t come in a better time. No longer does one need to rely on centralized water utilities or costly drilling and potentially undesirable well water.
                    <br /><br />
                    Unlike commercial areas, which are usually surrounded with buildings, some residential areas can have a lot of free spaces between buildings. As a result, rainwater harvesting in residential areas can have multiple forms.
                </p>
                <img src="images/Camera Roll/res-intro0.png" className={styles.resIntroImg} alt="Introduction" />

                <p className={styles.resIntroP}><br></br>
                    Thousands of homes across the U.S. are now using rainwater harvesting as the primary source of water, and in many cases, the only source.
                    <br /><br />
                    Rainwater harvesting is here to stay. It&apos;s the answer for many wondering how they will have a sustainable water supply for their home. It may be the most influential force that helps our nation&apos;s freshwater supply in water conservation.
                </p>
                <img src="images/Camera Roll/res-intro1.png" className={styles.resIntroImg} alt="Rainwater harvesting homes" />
            </div>

            {/* Common rainwater uses */}
            <div className={styles.resUses}>
                <h1 className={styles.resUsesH1}>Common Residential Uses</h1>
                <p className={styles.resUsesP}>This system is designed and treats the water to result in safe and healthy water. You can use it for anything like:</p>
                <ul className={styles.resUsesUlLi}>
                    <li>Irrigation</li>
                    <li>Washing vehicles and equipment</li>
                    <li>Water for wildlife, pets or livestock</li>
                    <li>Filling ponds & pools</li>
                    <li>Fire protection</li>
                    <li>Drinking and cooking</li>
                    <li>Bathing and laundry</li>
                    <li>Flushing toilets</li>
                    <li>Any other indoor and potable water uses</li>
                </ul>
                <img src="images/Camera Roll/com_uses.png" className={styles.resUsesImg} alt="Common residential uses" />
            </div>

            {/* Explaining methods */}
            <div className={styles.resExplain}>
                <div className={styles.resExplainMethods}>
                    <h1 className={styles.resExplainH1}>Rainwater Harvesting In Residential Area</h1>
                    <p className={styles.resExplainMethodsP}>
                        Rooftop rainwater harvesting is the most common rainwater harvesting technique for domestic consumption. In residential areas, this is often done on a small scale. It is a simple, low-cost technique that requires minimal specific expertise or knowledge and offers many benefits. Rainwater is collected on the roof and transported by gutters to a storage tank, where it supplies the water at the point of consumption or can be used to recharge a well or aquifer. It can also replenish water resources when they become scarce or of low quality, such as brackish groundwater or contaminated surface water during the rainy season.
                    </p>
                    <p className={styles.resExplainMethodsP}><br></br>
                        However, rainwater quality can be affected by air pollution, animal or bird droppings, insects, dirt, and organic matter. Hence regular maintenance (cleaning, repair, etc.) is required.
                    </p>
                </div>

                {/* Rain Barrels */}
                <div className={styles.resExplainElement}>
                    <h2 className={styles.resExplainElementH2}>1. Rain Barrels</h2>
                    <p className={styles.resExplainElementP}><br></br>
                        This method is the most common and one that many people are familiar with. This involves installing a barrel at a gutter downspout to collect rainwater. The actual barrel may be a recycled barrel or a new commercially available rain barrel.
                    </p>
                    <img src="images/Camera Roll/1280px-Maison_solaire_écoologique,_île_Sainte-Hélène_12.png" className={styles.resExplainElementImg} alt="Rain Barrels" />

                    <div className={styles.resPros}>
                        <h2 className={styles.resProsH2}>Pros:</h2>
                        <p><i className="bi bi-check-circle-fill"></i> Easily implemented by anyone at any residence.</p>
                        <p><i className="bi bi-check-circle-fill"></i> Barrels are readily available in your community or at various stores & websites.</p>
                        <p><i className="bi bi-check-circle-fill"></i> Barrels don&apos;t take up much space so they can fit into any situation.</p>
                    </div>
                </div>

                {/* Dry System */}
                <div className={styles.resExplainElement}>
                    <h2 className={styles.resExplainElementH2}>2. Dry System</h2>
                    <p className={styles.resExplainElementP}>
                        This method is a variation of a rain barrel set-up, but it involves a larger storage volume. Essentially, the collection pipe “drys” after each rain event since it empties directly into the top of the tank.
                    </p>
                    <img src="images/Camera Roll/res-dry.png" className={styles.resExplainElementImg} alt="Dry System" />

                    <div className={styles.resPros}>
                        <h2 className={styles.resProsH2}>Pros:</h2>
                        <p><i className="bi bi-check-circle-fill"></i> Can store a large amount of rainwater.</p>
                        <p><i className="bi bi-check-circle-fill"></i> Can be inexpensive to implement.</p>
                        <p><i className="bi bi-check-circle-fill"></i> Less complicated system so maintenance is easier.</p>
                        <p><i className="bi bi-check-circle-fill"></i> Great for climates where rainfall happens with infrequent, larger storm events.</p>
                    </div>
                </div>

                {/* Wet System */}
                <div className={styles.resExplainElement}>
                    <h2 className={styles.resExplainElementH2}>3. Wet System</h2>
                    <p className={styles.resExplainElementP}>
                        This method involves locating the collection pipes underground in order to connect multiple downspouts from different gutters. The rainwater will fill the underground piping and the water will rise in the vertical pipes until it spills into the tank. The downspouts and underground collection piping must have water-tight connections. The elevation of the tank inlet must be below the lowest gutter on the house.
                    </p>
                    <img src="images/Camera Roll/Bushman.png" className={styles.resExplainElementImg} alt="Wet System" />

                    <div className={styles.resPros}>
                        <h2 className={styles.resProsH2}>Pros:</h2>
                        <p><i className="bi bi-check-circle-fill"></i> The ability to collect from your entire collection surface.</p>
                        <p><i className="bi bi-check-circle-fill"></i> The ability to collect from multiple gutters and downspouts.</p>
                        <p><i className="bi bi-check-circle-fill"></i> The tank can be located away from your house.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
