import styles from './methods.module.css';
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
export default function MethodsBlog() {
  return (
    <div>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        <i className="bi bi-caret-up-fill"></i>
      </button>
      <div>
        <img src="images/banner_method.jpg" className="w-100" />
        <div className="container col-sm_5">
          <h1 className={styles.titleText}>HARVESTING METHODS & EFFICIENTLY USES</h1>
        </div>
        <div className="container col-sm-5">
          <p className={styles.body}>
            So you're convinced that you want to start collecting rainwater at your house. Below you will find the resources to educate yourself on the best method for harvesting rainwater in your situation. You will also find information about the basic components of a rainwater collection system. Even though rainwater catchment is an old technology, there have been many improvements over time through product innovations.
            <br></br><br></br>
            The only thing that differs in the following methods is the scale of the system. They all follow the same principles but differ on aesthetics and actual water conservation effectiveness.
          </p>
          <br></br>
        </div>

        <img src="images/Camera Roll/RWH-System.png" className="mb-5 w-50 mx-auto d-block" alt="Rainwater Harvesting System" />

        {/* Provide Laws & Before Installation Notices */}
        <div>
          <div className="container col-sm-5">
            <h1 className={styles.titleText}>Before Installation Notices</h1>
            <p className={styles.body}>
              Rainwater harvesting as a primary water supply is a relatively new idea and industry. Therefore, the laws around rainwater harvesting can be a concern. As of right now, the federal government does not regulate rainwater harvesting at all, but rather, leaves it up to the individual state governments. Make sure that your rainwater harvesting trade contractor is aware of and complies with local codes and regulations.
              <br></br><br></br>
              In almost every case, it is not illegal to harvest rainwater. Rainwater is a resource, and once it falls on your property, it's yours          </p>
          </div>
          <br></br>
          <img src="images/Camera Roll/met_notice.png" className="w-50 mx-auto d-block" alt="Installation Notices" />

          <div className="container col-sm-5 mt-5">
            <p className={styles.body}>
              Before installing your own system, please check to see if your area is suitable to harvest rainwater and be aware of your local laws or regulations on Rainwater Harvesting and available ground, spaces to install suitable systems.
            </p>
          </div>
          <br></br>
          <img src="images/Camera Roll/met-map.png" className="w-50 mx-auto d-block" alt="Installation Map" />
        </div>

        <div className="container col-sm-5 mt-5">
          <h1 className={styles.leftTitleText}>A Successful System</h1>
          <p className={styles.body}>
            The basic principles of rainwater harvesting are rather simple: catch rainwater, store it, use it. But there are components, details, and processes that are critical to the success of a rainwater harvesting system.<br></br><br></br>
            What do we mean by a successful system?<br></br><br></br>
            Rainwater harvesting as your main water supply should only bring benefits and improvement to your water, including:<br></br><br></br>
            <strong>Water quality:</strong> Based on purpose, the water should be clear, odorless, and taste great and needs to be bacteria-free through the use of a water disinfection system such as ultraviolet light or just simply clean, no dust, dirt, insects, or any organic matter for non-potable uses.<br></br><br></br>
            <strong>Water pressure:</strong> The water should flow at the highest pressure possible without exceeding proper limits.<br></br><br></br>
            <strong>Water storage:</strong> The water being stored should be odor-free, slime-free, and clear.<br></br><br></br>
            <strong>System design:</strong> The system should be designed to meet the supply and demand of the home and its occupants. What is the sq. ft. roof surface that will be collecting rainwater? What is the average annual/monthly rainfall in the area? How much storage gives enough buffer to supply the house with ease, even with rain lapses?<br></br><br></br>
            These are four points that help in determining a successful rainwater harvesting system, but more aspects are involved even beyond these.<br></br><br></br>
          </p>
        </div>

        <img src="images/Camera Roll/met_system.png" className="w-50 mx-auto d-block" alt="Successful System" />

        {/* Rainwater Harvesting Methods */}
        <div>
          <div className={`container col-sm-5 mt-5`}>
            <h1 className={styles.titleText}>Rainwater Harvesting Methods</h1>
            <p className={styles.body}>
              Before learning how to create a complete rainwater collection system, we need to learn about all available harvesting methods: <br /><br />
            </p>
          </div>
          <img src="images/Camera Roll/met_mets.png" className="w-50 mx-auto d-block mb-5" alt="Harvesting Methods" />

          {/* Rainwater Barrels method */}
          <div>
            <div className="container col-sm-5">
              <p className={styles.body}>
                <b>1. Rainwater Barrels: </b> Barrel installation is the cheapest and easiest way to start harvesting rainwater in your home. A barrel is simply installed underneath the downspout of the guttering so that rain falling on the roof is funneled into the barrel. <br /><br />
                Usually, the container will consist of a spigot under it to enable you to draw water and irrigate your garden. Better still, a hose can be connected to the spigot or to a drip irrigation system. <br></br><br></br>
                Barrels are advantageous because they can effortlessly be sourced whether recycled or new. If you opt for the recycled barrel, make a point to know exactly what the barrel was used for in order to be sure that no chemical residues remain inside. If you reside in a mosquito-infested area, make sure to include a lid for your barrel to mitigate the possibility of mosquitoes breeding in your barrel. <br></br><br></br>
                When winter month knocks, it is advisable to disconnect your barrel to prevent freezing and cracking. The major disadvantage of rainwater barrels is that they have a limited capacity; meaning prolonged rains would result in flooding. The barrels are easy to use and readily available for purchase at many locations, all at reasonable prices. <br></br><br></br>
              </p>
            </div>
            <img src="images/Camera Roll/met_barrels.png" className="w-50 mx-auto d-block mb-5" alt="Rainwater Barrels" />
          </div>

          {/* Dry System */}
          <div>
            <div className="container col-sm-5">
              <p className={styles.body}>
                <b>2. Dry System: </b>This is a well-known method of rainwater harvesting. It&#39;s basically an improvement to the rainwater barrel technique in terms of size. A larger water storage container is situated just a few steps from the property. This container provides a much larger storage capacity compared to the barrel. <br /><br /><br></br>
                The gutter is then diverted to channel water into the tank. It's also easy to implement and relatively cheap. The name “dry” comes from the fact that the collection pipe dries up after any rainy day because it's meant to empty into the top of the tank. The dry system is ideal for areas with huge storms.<br></br><br></br>
              </p>
            </div>
            <img src="images/Camera Roll/rainwater-harvesting-equine.png" className="w-50 mx-auto d-block mb-5" alt="Dry System" />
          </div>

          {/* Wet System */}
          <div>
            <div className="container col-sm-5">
              <p className={styles.body}>
                <b>3. Wet System: </b>The wet system is the exact opposite of the dry system. This is because the collection pipes are ever full of water since they are located underground. <br /><br />
              </p>
            </div>
            <img src="images/Camera Roll/met_wet.png" className="w-50 mx-auto d-block mb-5" alt="Wet System" />
            <div className="container col-sm-5">
              <p className={styles.body}>
                When there is no rain, the level stays constant, and the pipes are always full. Due to the ever availability of water inside the pipes, it is recommended that they be watertight to mitigate the possibility of leaking into the soil. The underground piping makes it relatively expensive to install compared to the dry and wet systems.<br></br><br></br>
              </p>
            </div>
          </div>

          {/* Compare between Dry & Wet System */}
          <div>
            <iframe
              className="w-50 mx-auto d-block mb-5"
              allowFullScreen
              height="550px"
              src="https://www.youtube.com/embed/pcjuXr8vQXA?si=gCyPfKLrI1T7VJPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>  

          {/* Green Roof */}
          <div>
            <div className="container col-sm-5">
              <p className={styles.body}>
                <b>4. Green Roof: </b>This method of rainwater harvesting literally cuts out the middleman. Instead of directing rainwater for storage in the tank and then channel it to the garden; you could install a green roof on your house to enable plants to use the water instantly. But you have to lay down a lining for your roof's protection and include a drainage system to take care of the runoffs.<br /><br />

                Installing garden beds with plants that require low maintenance is the surefire way of maximizing your plot's productive space and leveraging the rainwater where it falls. Also, installing a green roof will add insulation to your house and cushion your roof from damage.<br /><br />

                If you prefer you can create your own barrels for rainwater harvesting. Just a few components like the Catchment area, conveyance system, first rain separator, filter unit, storage, delivery system, usage, recharge, and supplies are needed to create your own barrel.<br /><br />

                You will need to follow the instructions included with your rainwater harvesting kit to set things up and begin the collection of the rainwater. For a DIY job, there are many resources available to you on the internet at no charge. You can definitely take advantage of the information whenever you need to and create your own rainwater harvesting system. <br /><br />
              </p>
            </div>
            <img src="images/Camera Roll/met_roof.png" className="w-50 mx-auto d-block mb-5" alt="Green Roof" />
          </div>

          {/* Retention Ponds */}
          <div>
            <div className="container col-sm-5">
              <p className={styles.body}>
                <b>5. Retention Ponds: </b>Retention ponds are used to collect surface runoff water and improve the quality of water by natural processes like sedimentation, decomposition, solar disinfection, and soil filtration. This type of pond normally has a mud bottom, but in some cases, it may be lined with concrete. The most common use of water collected and harvested by pond harvesting is watering livestock, however, it can also be used for groundwater recharge, irrigation or any other purpose other than potable uses.<br></br><br></br>

                These can be costly, unsightly, and use a significant amount of space. Retention ponds are a cost-only method of stormwater retention and provide little in gain, including the unfortunate migration of more mosquitoes into the area. There are retention ponds that have been made to add a pleasant view to the property, but to do this costs even more. Most developers try to hide retention ponds the best they can. <br /><br />
              </p>
            </div>
            <img src="images/Camera Roll/met-pond.png" className="w-50 mx-auto d-block mb-5" alt="Retention Ponds" />
          </div>

          {/* Permeable Pavers */}
          <div>
            <div className="container col-sm-5">
              <p className={styles.body}>
                <b>6. Permeable Pavers: </b>A Permeable Pavement stormwater runoff system stores water by allowing stormwater runoff to infiltrate through porous surfaces into a storage reservoir. This method of stormwater runoff harvesting utilizes a free resource to reduce municipal water supply costs, while complying with regional stormwater management guidelines. <br /><br />
                In southern climates, a NO INFILTRATION system (complete with liner) can be used as the long term storage reservoir, with the water being used for irrigation, washing or other non-potable applications. An integrated control system, is typically used to operate these harvesting systems. In addition, where the system is also serving a stormwater management function, it is recommended that an active control system be used to monitor weather forecast information and to automatically draw down the water volume to accommodate projected precipitation rates. <br /><br />
                This can be a very costly way of retaining stormwater. And again, it is a cost-only method that can provide little benefit other than the retention itself. Permeable pavers can be made to be a beautiful addition to the landscape of a property. This, of course, comes with a price. <br /><br />
              </p>
            </div>
            <img src="images/Camera Roll/pavement-print.png" className="w-50 mx-auto d-block mt-n4" alt="Permeable Pavers" />

            <div className="container col-sm-5 mt-n2">
              <h1 className={styles.titleText}>Harvesting System Setup</h1>
              <p className={styles.body}>
                After learning all available harvesting methods, the next step will be setting up a working system.
                <br /><br />
                Well-designed rainwater harvesting systems ensure that the pipes and all other openings are insect-proof, especially in wet systems. Additionally, wire mesh screen covers on all tank inlets can help prevent debris from entering the tank. Collection surfaces (mainly roofs) should be made of nontoxic materials, particularly avoiding lead-based paints and membranes, and tanks should be made of nontoxic and noncorrosive material. Care should be taken to ensure that the tank outlet taps or draw-off pipes are at least 10 cm (4 inches) above the tank floor to avoid drawing out any sludge that may have collected in the water supply. Although some systems have a sump pump and washout pipe to remove sludge, regular cleaning of the inside surfaces of the tank is recommended for all systems.
                <br /><br />
                Additionally, catchments should be kept clean of accumulations of dirt, moss, lichens, and other debris. Trees branches that overhang those catchment surfaces should be cut back. Regular cleaning of gutters, tank inlets, and screens and annual tank inspection are necessary for proper functioning. Ideally, the water should be tested periodically to monitor its quality.
                <br /><br />
              </p>
            </div>
            <img src="images/Camera Roll/michiganrainwaterharvest.png" className="w-50 mx-auto d-block mb-3" alt="A complete harvesting system example/model" />
            <p className="text-center"><i>A complete harvesting system example/model</i></p>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Where the System Starts (Rooftop)</h1>
              <p className={styles.body}>
                The first component of every rainwater harvesting system is the catchment area. Rooftops provide a hard surface that is separated from the debris that are found on ground surfaces. For instance, dirt, gravel, animals, cars, oil, and many others are common on the ground. This is why collecting rainwater from a paved driveway requires a much more intense filtration process. Roofs, on the other hand, are generally only exposed to a few contaminants which are easily filtered and removed.
                <br /><br />
                The type of roof does matter. Generally, roofs such as tin, slate, and rubber are excellent for a rainwater harvesting application. Roofs that will release more contaminants into the water can cause problems. What about shingles? There are certain types of shingle roofs that approved to use, but make sure to talk with a rainwater harvesting professional before making your decision.
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Diversion (Conveyance)</h1>
              <p className={styles.body}>
                The next step in the rainwater harvesting process is diverting the rain from the rooftop into the rainwater storage vessel. There are two primary methods of diversion:
                <br /><br />
                <b>Below-Grade Storage:</b> Water flows from the downspouts and into underground conveyance where it is gravity fed into the storage.
                <br /><br />
                <b>Level or Above-Grade Storage:</b> In the case where the water storage is on grade or even a little above where the downspouts end, a wet-conveyance system is needed. Many homes today use a wet-conveyance system. They require the downspouts be replaced with sealed conveyance. Therefore, as the water fills up the conveyance, gravity will push the water into the storage. The conveyance can then be painted or covered to match the exterior design.
                <br /><br />
                After the downspouts, the conveyance is placed underground all the way to the storage.
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Pre-Storage Filtration</h1>
              <p className={styles.body}>
                Before entering the rainwater storage vessel, the water is sent through a robust pre-storage filter. This pre-filter has two primary functions:
                <br /><br />
                <b>Filtration:</b> The major contaminants that could flow from the roof and through the conveyance such as leaves and other large contaminants are easily filtered out through the filter.
                <br /><br />
                <b>Oxygenation:</b> As the water passes through the filter, it is designed in such a way that highly oxygenates the water, which helps keep the water naturally fresh and pure.
                <br /><br />
                The filter is designed to be very efficient, yet effective.
                <br /><br />
                Most pre-storage filters use a metal mesh filter that is either gravity-fed or filtered through centrifugal force. These filters do not need to be replaced, but rather should be cleaned about 2-4 times per year.
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Entering Storage</h1>
              <p className={styles.body}>
                After the water passes through the pre-storage filtration, it is diverted into the water storage. But even this process has been designed to work precisely with the system.
                <br /><br />
                There is a healthy microbiological layer that forms on the bottom of the tank, known as the biofilm, and it helps keep the water clean. And to make sure that this layer is not disrupted, when entering the storage, water goes through a smoothing inlet. This sends the water into the tank in an upward motion, rather than forcing water to the bottom.
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Storage</h1>
              <p className={styles.body}>
                Rainwater storage can be placed below ground, above ground, or partially buried. The benefits of being above ground or partially buried are the cost is usually less, and you can also use the storage as a part of your landscape design. While the benefits of below ground storage are that the storage is completely out of sight, but the cost of excavation will generally bring the overall price up.
                <br /><br />
                There are many different types of tanks. The most common are above and below ground polyethylene, and above ground metal tanks. It is important to make sure the tank quality is high; it needs to be U.V. resistant and designed for potable water use.
                <br /><br />
                The amount of storage is completely based on the application. Most residences will fall somewhere between 3,500 gallons and 10,000 gallons of water storage. Often times, storage is placed in series, such as five 1,300 gallon tanks.
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Overflow | Groundwater Recharge</h1>
              <p className={styles.body}>
                When the water in storage is filled to the top, it is sent out through an overflow device. This is specially designed to let the water flow out, without compromising the inside of the tank to any outside sources. This water can be diverted into an animal water trough, a pond, or can be sent into groundwater recharge.
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Pump</h1>
              <p className={styles.body}>
                Every rainwater harvesting system includes a pump. There is little strain put on the pump compared to a well because the water isn't directly fighting gravity for hundreds of feet. Rather, the pump is simply mounted inside the water storage tank.
                <br /><br />
                And using a floating mesh water intake, it draws the water from about 4 inches below the surface where it is best. The water is then pumped out of the tank and sent to the filtration panel. The pump should be high-quality and robust, but should the pump ever be damaged, or need to be replaced, it is a quick job to replace the pump since it is very accessible.
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Exiting the Tank</h1>
              <p className={styles.body}>
                It is not only important how the water enters the tank, but also how it exits. Using a floating filter intake, the water passes through yet another filter on its way out of the tank. It is collected just a few inches under the surface, where the water is at its best.
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Filtration and Controls</h1>
              <p className={styles.body}>
                Due to the water already being very clean, three simple stages of filtration and disinfection are needed to make certain the water is 100% safe to drink. The water is sent through a sediment filter that removes any remaining particles. And then through a carbon filter that removes other contaminants and makes the water fresh and taste great. And finally, the water is sent through an ultraviolet disinfection system. This removes any possible bacteria from coming through the water. The filters only need to be changed once or twice per year.
                <br /><br />
                Controls such as water storage level indicators can be used. Pressure readings are also common.
                <br /><br />
                The filtration and controls panel can often be placed on a wall using a 3ft x 3ft panel, so it doesn't take a lot of space.
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Automatic Crossover to Secondary Water Supply</h1>
              <p className={styles.body}>
                This is a great way to calm any nerves of ever running out of water. The system can be tied into a municipal or well water supply that can be automatically switched on in case of a drought. If this is used with municipal water supply, backflow prevention is required.
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.leftTitleText}>Use</h1>
              <p className={styles.body}>
                The water has now made it through the final part of the rainwater harvesting system process. The rainwater should be tied in directly to the house plumbing.
                <br /><br />
                It is ready to use!
              </p>
            </div>
            <div class="container col-sm_5">
              <h1 class={styles.titleText}>Setup Progress Summary</h1>
              <p className={styles.body}>
                <ol className={styles.oListText}>
                  <li>It all starts with your <b>ROOF SURFACE</b>. Nearly all roof surfaces are fine for rainwater harvesting.</li>
                  <li>Your gutters should have some sort of <b>GUTTER PROTECTION SCREENING</b> in order to keep large debris from entering the gutters.</li>
                  <li>You can collect rainwater from <b>ANY TYPE AND SHAPE OF GUTTER</b>. You do not need a special gutter for harvesting rainwater.</li>
                  <li>An additional filtration opportunity is with the installation of a <b>RAIN HEAD</b> (downspout filter) that allows for a bit of self-cleaning filtration options.</li>
                  <li><b>A FIRST-FLUSH DIVERTER</b> helps to prevent the first flush of contaminated rainwater from entering the tank.</li>
                  <li>Another rainwater filtration opportunity is with a <b>TANK SCREEN</b> that is installed on the tank entry point. It also helps to keep mosquitoes and pests out.</li>
                  <li><b>RAINWATER TANKS</b>  come in all sorts of sizes and materials. Study all necessary information before installing.</li>
                  <li>Install an <b>INSECT PROOF FLAP VALVE</b> on the end of the overflow pipe to keep mosquitoes and pests out.</li>
                  <li>An <b>AUTO-FILL SYSTEM</b> can be installed to keep a minimum amount of water in the tank at all times. This is very important for rainwater tanks that are connected to automatic irrigation systems in order to prevent the pump from running dry.</li>
                  <li>Select a <b>PUMP SYSTEM</b> to provide pressurized rainwater to distribute the rainwater easier or to connect to an inground irrigation system.</li>
                  <li>Install an <b>IRRIGATION FILTER</b> inline after the pump in order to catch any large debris that may have gotten through the pump.</li>
                  <li>A <b>WATER LEVEL INDICATOR</b> can be helpful with monitoring the water usage from the tank. Those are available in simple gauge tank options along with wireless digital options.</li>
                </ol>
              </p>
            </div>
            <div class="container col-sm_5">
              <h1 class={styles.titleText}>Some Harvesting System Models</h1>
            </div>
            <img src="images/Camera Roll/house.png" class="w-50 mx-auto d-block mb-5" />
            <img src="images/Camera Roll/Advantages-of-Rainwater-Harvesting-img.png" class="w-50 mx-auto d-block mb-5" />
            <img src="images/Camera Roll/rainwater-harvesting.png" class="w-50 mx-auto d-block mb-5" />
            <div className="container col-sm-5">
              <h1 className={styles.titleText}>How To Harvest & Use Water Efficiently</h1>
              <p className={styles.body}>
                At the beginning of the rainy season, <b>don’t</b> start harvesting rainwater right away. Wait for a 15-20 minutes rain to wash away dirt or any other contaminants in the air and your rooftop. It is necessary to clean the storage tanks, collecting devices, and carefully cover them to avoid the spread of contaminants. Furthermore, in the use of rainwater for daily life, it is not recommended to use raw rainwater. There might be harmful substances that are not commonly visible, which can affect you without a doubt. We highly recommend filtering before use.
              </p>

              <p className={styles.body}>
                There are basically three areas where rainwater can be used:
                <ul className={styles.uListText}>
                  <li>Irrigation use</li>
                  <li>Indoor, non-potable use</li>
                  <li>Whole house, potable use</li>
                </ul>
              </p>

              <p className={styles.body}>
                <br></br>
                Here are some ideas for specific uses of rainwater:
                <ul className={styles.uListText}>
                  <li>Hand water your lawn and garden</li>
                  <li>Connect rainwater collection system to irrigation/sprinkler system</li>
                  <li>Wash your vehicles</li>
                  <li>Wash your pets</li>
                  <li>Refill your fountains and fish ponds</li>
                  <li>Refill your swimming pool</li>
                  <li>Replace the use of tap water with rainwater to wash your driveways and sidewalks (if you don’t use a broom)</li>
                  <li>For all indoor non-potable fixtures (toilets and clothes washer)</li>
                  <li>For all potable needs when properly filtered and disinfected</li>
                  <li>For industrial processes instead of municipally treated water</li>
                </ul>
              </p>
            </div>

            <div className="container col-sm-5">
              <h1 className={styles.titleText}>Conclusion</h1>
              <p className={styles.body}>
                Rainwater harvesting is something that thousands of families across the world participate in, and you could be the next to enjoy the multitude of benefits offered with rainwater harvesting. <br /><br />
                It is an easy, simple, and worthwhile process, so it is only in your best interest to take a look at rainwater harvesting and its benefits to your home. It is the answer for many wondering how they will have a sustainable water supply for their home. It may be the most influential force that helps our nation’s freshwater supply in water conservation. <br /><br />
                You may discover many surprises and things that you did not know along the way. Take control of your water.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
