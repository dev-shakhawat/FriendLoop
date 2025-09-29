import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

// css
import searchStyles from './searchStyle'

// redux
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

// icons
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Search() {
  const {theme} = useSelector((state: RootState) => state.theme) 
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<View>(null);
  const inputRef = useRef<TextInput>(null);

  // শুধু open করার function
  const handleOpen = (): void => {
    setIsOpen(true);
  };

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      // Type assertion for DOM elements
      const dropdownElement = dropdownRef.current as unknown as HTMLElement;
      const inputElement = inputRef.current as unknown as HTMLElement;
      
      // যদি dropdown এর বাইরে click হয়
      if (dropdownElement && 
          !dropdownElement.contains(event.target as Node) &&
          inputElement && 
          !inputElement.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Event listener add
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClear = (): void => {
    // Clear functionality here
    console.log('Clear clicked');
  };

  return (
    <View style={{...searchStyles.searchBox}}>
        
      {/* search input */}
      <View style={{ ...searchStyles.inputBox , backgroundColor: theme == 'dark' ? '#3e4a5e' : '#e4e6ebff' }} >
        <Ionicons style={{marginLeft: 10}} name="search-outline" size={24} color={theme == 'dark' ? '#ffffff' : '#524e4eff'} />
        <TextInput    
          ref={inputRef}
          style={{...searchStyles.searchInput , color: theme == 'dark' ? '#ffffff' : '#524e4eff' }} 
          placeholder='Search friends , videos'
          placeholderTextColor={theme === 'dark' ? '#a0a0a0' : '#666666'}
          onFocus={handleOpen}
        />
      </View>

      {/* search result & history */}
      <View 
        ref={dropdownRef} 
        style={{
          ...searchStyles.dropDownBox, 
          backgroundColor: theme == 'dark' ? '#334155' : '#ffffff', 
          borderColor: theme == 'dark' ? '#334155' : '#e4e6ebff',
          opacity: isOpen ? 1 : 0, 
          top: isOpen ? -7 : 5,
          pointerEvents: isOpen ? 'auto' : 'none',
        }} 
      >
        {/* search result head */}
        <View style={{padding: 5 , flexDirection: 'row' , justifyContent: 'space-between' }}>
          <Text style={{color: theme == 'dark' ? '#ffffff' : '#524e4eff' , fontWeight: '600'}}>
            Search result
          </Text>
          <TouchableOpacity onPress={handleClear}>
            <Text style={{ color: theme === 'dark' ? '#60a5fa' : '#2563eb' , fontWeight: '600'}}>Clear</Text>
          </TouchableOpacity>
        </View>

        {/* all search results */}
        <View>
          {/* Add your search results here */}
        </View>
        
      </View>

    </View>
  )
}