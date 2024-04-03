import Card from "./Card";

export default function Cardcontainer(){
    const cardData = [
        {
          headerone: "FREE",
          headertwo: "$ 0/month",
          features:[
              {featurename: "Single User", isAvailable: true},
              {featurename: "50GB Storage", isAvailable: true},
              {featurename: "Unlimitd Public Projects", isAvailable: true},
              {featurename: "Community Access", isAvailable: true},
              {featurename: "Unlimited Private Projects", isAvailable: false},
              {featurename: "Dedicated Phone Support", isAvailable: false},
              {featurename: "Free Subdomain", isAvailable: false},
              {featurename: "Monthly Status Report", isAvailable: false},
            ],
        },
        {
          headerone: "PLUS",
          headertwo: "$ 9/month",
          features:[
              {featurename: "5 Users", isAvailable: true},
              {featurename: "50GB Storage", isAvailable: true},
              {featurename: "Unlimitd Public Projects", isAvailable: true},
              {featurename: "Community Access", isAvailable: true},
              {featurename: "Unlimited Private Projects", isAvailable: true},
              {featurename: "Dedicated Phone Support", isAvailable: true},
              {featurename: "Free Subdomain", isAvailable: true},
              {featurename: "Monthly Status Report", isAvailable: false},
            ],
        },
        {
          headerone: "PRO",
          headertwo: "$ 49/month",
          features:[
              {featurename: "Unlimited Users", isAvailable: true},
              {featurename: "50GB Storage", isAvailable: true},
              {featurename: "Unlimitd Public Projects", isAvailable: true},
              {featurename: "Community Access", isAvailable: true},
              {featurename: "Unlimited Private Projects", isAvailable: true},
              {featurename: "Dedicated Phone Support", isAvailable: true},
              {featurename: "Free Subdomain", isAvailable: true},
              {featurename: "Monthly Status Report", isAvailable: true},
            ],
        }
      ]

    return (<div className="container" id="content-area">
                <div className="row">
                  {cardData.map((element, index) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index}>
                      <Card   
                        titleone={element.headerone}
                        titletwo={element.headertwo}
                        services={element.features}
                      />
                    </div>
                  ))}
                </div>
           </div>)
}
