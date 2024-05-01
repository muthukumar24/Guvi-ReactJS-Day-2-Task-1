// Importing prop types for validation
import PropTypes from 'prop-types';

export default function Card(props = {}){

    const{titleone, titletwo, services} = props;

            // Card
    return (<div className="card mb-3" id="card-area">
                {/* Card Body */}
                <div className="card-body">
                    {/* Header Text One */}
                    <h6 className="text-center" id="headertext-one">{titleone}</h6>
                    {/* Header Text Two */}
                    <h2 className="text-center" id="headertext-two">{titletwo}</h2>
                    <hr />
                    {/* List Items */}
                    <ul id="list-items">
                        {/* Using Map method will create list items according to datas available in "services" */}
                        {services.map((element, index) => (
                            // if service is in available status that is true then it will not add the className "blur"
                            // if service is not in available status that is false then it will add the className "blur"
                            // The "blur" className will add blur effect to the service that is not in available status - false
                            <li key={index} className={element.isAvailable ? '' : 'blur'}>
                                {/* According to the service or feature status that is true or false, 
                                ✔️ icon or ✖️ icon will be added before the service or feature name */}
                                {element.isAvailable ? "✔️" : "✖️"} {element.featurename}
                            </li>
                        ))}
                    </ul>
                    {/* Click Here Button */}
                    <div className="d-grid d-flex justify-content-center">
                        <button type="button" className="btn btn-primary" id="button">Click Here</button>
                    </div>
                </div>
            </div>);
}

// Prop Type Validation 
Card.propTypes = {
    titleone:PropTypes.string,
    titletwo:PropTypes.string,
    services:PropTypes.array,
}