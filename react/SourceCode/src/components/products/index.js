
import data from "../../data.json"
import "./products.module.css"
function Products() {
    const accessories = data.accessories;
    const filters = data.filters;
    const pumpControl = data.pumpControl;
    const water_sterilisation = data.water_sterilisation;
    const tanks = data.tanks;

    const topFunction = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            <button onClick={() => topFunction()} id="myBtn" title="Go to top">
                <i className="bi bi-caret-up-fill"></i>
            </button>

            <div>
                <img src="images/Camera Roll/prod_thumbnail.jpg" className="w-100" alt="Product Thumbnail" />
            </div>

            <div className="container">
                <h1 className="title_text">Accessories</h1>
                <div className="row">
                    {accessories.map((item, index) => (
                        <div key={index} className="list-group-item">
                            <img src={`images/${item.image}`} className="mb-4" alt={item.name} />
                            <br />
                            <b>{item.name.toUpperCase()}</b>
                            <br />
                            <br />
                            {item.description}
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <h1 className="title_text">Pumps & Controls</h1>
                <div className="row">
                    {pumpControl.map((item, index) => (
                        <div key={index} className="list-group-item w-100">
                            <img src={`images/${item.image}`} className="mb-4" alt={item.name} />
                            <br />
                            <b>{item.name.toUpperCase()}</b>
                            <br />
                            <br />
                            {item.description}
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <h1 className="title_text">Filters</h1>
                <div className="row">
                    {filters.map((item, index) => (
                        <div key={index} className="list-group-item w-100">
                            <img src={`images/${item.image}`} className="mb-4" alt={item.name} />
                            <br />
                            <b>{item.name.toUpperCase()}</b>
                            <br />
                            <br />
                            {item.description}
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <h1 className="title_text mb-5">Water Sterilisation</h1>
                <div className="row">
                    {water_sterilisation.map((item, index) => (
                        <div key={index} className="list-group-item w-100">
                            <img src={`images/${item.image}`} className="mb-4" alt={item.name} />
                            <br />
                            <b>{item.name.toUpperCase()}</b>
                            <br />
                            <br />
                            {item.description}
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <h1 className="title_text">Tanks</h1>
                <div className="row">
                    {tanks.map((item, index) => (
                        <div key={index} className="list-group-item w-100">
                            <img src={`images/${item.image}`} className="mb-4" alt={item.name} />
                            <br />
                            <b>{item.name.toUpperCase()}</b>
                            <br />
                            <br />
                            {item.description}
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mb-5">
                <h1 className="title_text">Our Recommendation</h1>
                <p style={{ margin: 0 }} className="list-group-item w-100">
                    <b>Storage Type & Location:</b>
                    <br />
                    <br />
                    Rainwater harvesting storage is located above ground, below ground, or partially buried. In deciding what storage is best for you, the key factors are cost and aesthetics. Other factors such as grade, allocated space, and underground geology can be a factor as well.
                    <br />
                    <br />
                    Above ground tanks require the least amount of excavation which can reduce costs dramatically. These can be hidden behind trees or placed away from the home. Many people also use quality above ground tanks
                </p>
            </div>
        </>
    )
}

export default Products;