import React from 'react'
import { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

function Login() {


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    return (
        <View style={styles.container}>
            <StatusBar />



            <Image source={require('../../assets/signup_banner.png')} alt='sign up banner' style={{ width: 200, height: 200, justifyContent: 'center', alignSelf: 'center' }} />


            <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 20, marginTop: 10, borderTopLeftRadius: 20, }}>
                <TextInput placeholder='Enter your name' style={{ width: 300, backgroundColor: '#DCDCDC', borderColor: 'black', borderRadius: 10, padding: 10, margin: 12, alignSelf: 'center' }} />
                <TextInput
                    placeholder='Enter your name' style={{ width: 300, backgroundColor: '#DCDCDC', borderColor: 'black', borderRadius: 10, padding: 10, margin: 12, alignSelf: 'center' }} />

                <TextInput style={{ width: 300, borderColor: '#547773', borderWidth: 1, borderRadius: 10, padding: 10, margin: 12, alignSelf: 'center' }} />

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />

                <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#547773', width: 300, height: 50, borderRadius: 20 }} >
                    <Text style={{ textAlign: 'center', justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto', color: 'white' }}>Sign Up</Text>
                </TouchableOpacity>

            </View>





        </View>

    )
}

export default Login


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#547773'


    },

});