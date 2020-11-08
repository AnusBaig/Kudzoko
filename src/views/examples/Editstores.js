import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Button,
    FormGroup,
    Col,
    Input,
    InputGroup,
} from "reactstrap";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "components/Headers/Header.js";


const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
];

class Editstores extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }

    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className=" mt--5" fluid>
                    {/* Table */}
                    <Row>
                        <div className="">
                            <Card style={{ width: 1000, }} className=" shadow">
                           
                                <CardBody>

                                <Row className=" container icon-examples"> 
                                <div style={{ width: 300, }}className="  radio">
                                <div >
                                                        <span className="text-darker text-sm">Store Id* </span>
                                                    </div>

                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    </div>
                                        
                                </Row>
                                    <Row className=" icon-examples">


                                        <div className="container">
                                            <div className="row">

                                                <Col className="col-md-4">
                                                   
                                                    <div >
                                                        <span className="text-darker text-sm">Name* </span>
                                                    </div>

                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Imtiaz Super Market" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>


                                                    <div >
                                                        <span className="text-darker text-sm">Conatact Number*</span>
                                                    </div>
                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="0313 1234567" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>


                                                    <div >
                                                        <span className="text-darker text-sm">Promo Bearer*</span>
                                                    </div>
                                                    <div style={{ borderRadius: 0, backgroundColor: "blue", }} className="col-md-0"></div>
                                                    <div >
                                                        <Select options={techCompanies} />
                                                    </div>
                                                   </Col>




                                                <Col className="col-md-4">
                                                
                                                    
                                                    <div >
                                                        <span className="text-darker text-sm">Store Email *</span>
                                                    </div>
                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Imtiaz@gmail.com" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>


                                                    <div >
                                                        <span className="text-darker text-sm">Id Type *</span>
                                                    </div>
                                                    <div style={{ borderRadius: 0, backgroundColor: "blue", }} className="col-md-0"></div>
                                                    <div >
                                                        <Select options={techCompanies} />
                                                    </div>
                                                    <div className="col-md-3"></div>



                                                   
                                                    <div >
                                                        <span className="text-darker text-sm">Comission(%) *</span>
                                                    </div>
                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="20%" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    
                                                   
                                                </Col>



                                                <Col className="col-md-4">
                                                
                                                    
                                                <div >
                                                    <span className="text-darker text-sm">Store Address *</span>
                                                </div>
                                                <FormGroup>
                                                    <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                        <Input placeholder="xyz" type="email" autoComplete="new-email" />
                                                    </InputGroup>
                                                </FormGroup>


                                                <div >
                                                    <span className="text-darker text-sm">CNIC Number *</span>
                                                </div>
                                                <FormGroup>
                                                    <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                        <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                    </InputGroup>
                                                </FormGroup>


                                                <div >
                                                    <span className="text-darker text-sm">Store Category *</span>
                                                </div>
                                                <div style={{ borderRadius: 0, backgroundColor: "blue", }} className="col-md-0"></div>
                                                <div >
                                                    <Select options={techCompanies} />
                                                </div>
                                                <div className="col-md-3"></div>
     
                                            </Col>


                                            </div>
                                        </div>
                                    </Row>

                                    <Row className=" container icon-examples">

                                    <Col className="mb-8  lg='2' mb-xl-4" xl="1">
                                    
                                    <div className="col-md-0">
                                                    <img  style={{width:100,height:100,}} src={this.state.file}/>
                                                    
                                                    </div>
                                    </Col>
                                    
                                    <Col className="mb-8  lg='2' mb-xl-4" xl="2">
                                    
                                    <div style={{ paddingTop:70,paddingLeft:50, textAlign:"center",  }} >
                                                   
                                                    <input style={{ height:100, width:100, textAlign:"center",  }} type="file" onChange={this.handleChange}/>
                                                    </div>
                                    </Col>  

                                    <Col style={{ width:100, textAlign:'end',paddingTop:150  }} className="mb-8  lg='2' mb-xl-4" xl="4">
                                                     <Button style={{ width: 100, textAlign: 'center', borderRadius: 2 }} color="info">Save</Button>{' '}     
                                                     </Col>                               

                                    </Row>
                                   
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Editstores;
