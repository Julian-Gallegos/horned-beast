import React from 'react';
import HornedBeast from './HornedBeast';
import deer from './reindeer.jpg';
import goat from './mountain-goat.jpg';

let arr = [{
    "_id": 1,
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  },

  {
    "_id": 2,
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Parent rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },

  {
    "_id": 3,
    "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    "title": "Unicorn Head",
    "description": "Someone wearing a very silly unicorn head mask",
    "keyword": "unicorn",
    "horns": 1
}]

class Main extends React.Component {
    render() {
        return (
            <>
                <HornedBeast title={'Mountain Goat'} imageUrl={goat} description={'A goat of the mountains'} />
                <HornedBeast title={'Reindeer'} imageUrl={deer} description={'A thick coated reindeer in a snowy field'} />
                
                {
                 /* 
                    .forEach() cannot return jsx. Found advice from this stackoverflow question:
                    https://stackoverflow.com/questions/66955890/react-foreach-not-being-rendered
                    Also advised the HornedBeast component have a key prop.
                    The developer console also warns about no key prop if one isn't added
                 */
                }
                {arr.map(item => {
                    return(
                        <HornedBeast key={item._id} title={item.title} imageUrl={item.image_url} description={item.description} />
                    );
                })}
            </>
        );
    }
}

export default Main;