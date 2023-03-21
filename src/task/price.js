import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Details() {

    return(
        <div className="price_details">
    <Pricing
       title = "FREE"
       subTitle = "$0"
       time = "/month"
       
    
       txt1 = "✓ Single User"
       txt2 = "✓ 5GB Storage"
       txt3 = "✓ Unlimited Public Projects"
       txt4 = "✓ Community Access"
       txt5 = "✕ Unlimited Private Projects"
       txt6 = "✕ Dedicated Phone Support"
       txt7 = "✕ Free Subdomain"
       txt8 = "✕ Monthly Status Reports"  
    /> 

    <Pricing
       title = "PLUS"
       subTitle = "$9"
       time = "/month"
       

       txt1 = "✓ 5 Users"
       txt2 = "✓ 50GB Storage"
       txt3 = "✓ Unlimited Public Projects"
       txt4 = "✓ Community Access"
       txt5 = "✓ Unlimited Private Projects"
       txt6 = "✓ Dedicated Phone Support"
       txt7 = "✓ Free Subdomain"
       txt8 = "✕ Monthly Status Reports"
    /> 

    <Pricing
       title = "PRO"
       subTitle = "$49"
       time = "/month"

       txt1 = "✓ Unlimited Users"
       txt2 = "✓ 150GB Storage"
       txt3 = "✓ Unlimited Public Projects"
       txt4 = "✓ Community Access"
       txt5 = "✓ Unlimited Private Projects"
       txt6 = "✓ Dedicated Support"
       txt7 = "✓ Unlimited Free Subdomains"
       txt8 = "✓ Monthly Status Reports"
    /> 
    </div>
    )
}

export default Details ;


function Pricing(props){

    return(
   <div>
        <Card className='card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className='title'>{props.title}</Card.Title>
          <Card.Subtitle className='plan-detail'><span className='price'>{props.subTitle}</span><span>{props.time}</span></Card.Subtitle>
          <hr></hr>
          <Card.Text className='text'><ul type="none">
          <li> {props.txt1}</li>
          <li> {props.txt2}</li>
          <li> {props.txt3}</li>
          <li> {props.txt4}</li>
          <li> {props.txt5}</li>
          <li> {props.txt6}</li>
          <li> {props.txt7}</li>
          <li> {props.txt8}</li>
          </ul>
          </Card.Text>
          <Button className='button' variant="primary">BUTTON</Button>
        </Card.Body>
      </Card>
      </div>
    )
}


