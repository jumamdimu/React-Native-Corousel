import React from 'react'
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from 'react-native'

const { width } = Dimensions.get("window");
const height = width * 0.6 // 60%

const Slider = (props) =>{
  const [active, setActive] = React.useState(0)

  const handlePagination = e => {
    const slide = Math.ceil(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width)
    if(slide !== active) setActive(slide)
  }

  return(
    <View style={ style.container }>
      <ScrollView         
        pagingEnabled 
        horizontal 
        onScroll={ e=>handlePagination(e)}
        showsHorizontalScrollIndicator={false}
        style={style.scroll}>
        {
          props.images.map((img, index) =>
            (
              <Image
                key={index}
                source={{ uri: img }} 
                style={style.image}
              />
            )
          )
        }
     </ScrollView>
     <View style={style.pagination}>
        {
          props.images.map((i, k) =>(
            <Text key={k} style={ k==active ? style.pagingActiveText : style.pagingText }>⬤</Text>
          ))
        }
     </View>
    </View>
  )
}

export default Slider

const style = new StyleSheet.create({
  container: { 
    marginTop: 50, 
    width, 
    height 
  },
  scroll: { 
    width, 
    height
  },
  image: { 
    width,  
    height, 
    resizeMode: "cover" 
  },
  pagination: { 
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: 0, 
    alignSelf: 'center'
  },
  pagingText: { 
    fontSize: (width / 30), 
    color: '#888', 
    margin: 3 
  },
  pagingActiveText: { 
    fontSize: (width / 30), 
    color: '#fff', 
    margin: 3 
  }
})