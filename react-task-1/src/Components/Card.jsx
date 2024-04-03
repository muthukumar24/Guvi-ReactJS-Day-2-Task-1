import PropTypes from 'prop-types';

export default function Card(props = {}){

    const{titleone, titletwo, services} = props;

    return (<div className="card mb-3" id="card-area">
                <div className="card-body">
                    <h6 className="text-center" id="headertext-one">{titleone}</h6>
                    <h2 className="text-center" id="headertext-two">{titletwo}</h2>
                    <hr />
                    <ul id="list-items">
                        {services.map((element, index) => (
                            <li key={index} className={element.isAvailable ? '' : 'blur'}>
                                {element.isAvailable ? "✔️" : "✖️"} {element.featurename}
                            </li>
                        ))}
                    </ul>
                    <div className="d-grid d-flex justify-content-center">
                        <button type="button" className="btn btn-primary" id="button">Click Here</button>
                    </div>
                </div>
            </div>);
}

Card.propTypes = {
    titleone:PropTypes.string,
    titletwo:PropTypes.string,
    services:PropTypes.array,
}