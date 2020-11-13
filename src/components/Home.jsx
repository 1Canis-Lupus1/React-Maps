import React,{Component} from 'react'
import Maps from './GoogleMaps'

class Home extends Component{
    render(){
        return(
            <div style={{margin:"50px",padding:"10px"}}>
                <Maps
     google={this.props.google}
     center={{lat: 23.3441, lng: 85.3096}}
     height='500px'
     zoom={15}
    />
            </div>

        )
    }
}

export default Home;