
// import { View, Text, TouchableOpacity, FlatListComponent } from 'react-native'
// import React from 'react'
// // import { FlatListComponent } from 'react-native'
// import CategoryItem from './CategoryItem'

// export default function CategoryList({setSelectedCategory}) {
//   const categoryList=[
//     {
//         id:1,
//         name:'Gas Station',
//         value:'gas_station',
//         icon:require('./../../../assets/gas.png')
//     },
//     {
//         id:2,
//         name:'Restaurants',
//         value:'restaurant',
//         icon:require('./../../../assets/food.png')
//     },
//     {
//         id:3,
//         name:'Cafe',
//         value:'cafe',
//         icon:require('./../../../assets/cafe.png')
//     },
// ]
//   return (
//     <View style={{marginTop:15}}>
//       <Text style={{
//         fontSize:20,
//         fontFamily:'raleway-bold',
        
//       }} >Select MBet Top Category</Text>

//       <FlatListComponent
//         data={categoryList}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         style={{marginTop:5}}
//         renderItem={({item})=>(
//           <TouchableOpacity 
//           onPress={()=>setSelectedCategory(item.value)} >
//             <CategoryItem category={item} />
//           </TouchableOpacity>
//         )}
//       />
      
//     </View>
//   )
// }


import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList() {

    const categoryList=[
        {
            id:1,
            name:'Hair Salon',
            value:'hairsalon',
            icon:require('./../../../assets/salon.png')
        },

        {
            id:2,
            name:'Bakery...',
            value:'bakery',
            icon:require('./../../../assets/food.png')
        },
        {
            id:3,
            name:'Cafe',
            value:'cafe',
            icon:require('./../../../assets/cafe.png')
        },
        {
            id:4,
            name:'Super - market',
            value:'supermaket',
            icon:require('./../../../assets/gas.png')
        },
    ]


  return (
    <View style={{marginTop: 15}}>
      <Text
        style={{
            fontSize:18,
            fontFamily:'raleway-bold',
                    
               }}
       > 
        Select MBet-Adera Top Categories 
       </Text>

        <FlatList 
        
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={{marginTop:5}}

        renderItem={({item})=>(

            // <View>
            //     <CategoryItem category={item} />
            // </View>

          <TouchableOpacity 
          onPress={()=> console.log(item.name)}>
          {/* onPress={()=>setSelectedCategory(item.value)} */}
            <CategoryItem category={item} />
          </TouchableOpacity>
        
        )}
        />

    </View>
  )
}