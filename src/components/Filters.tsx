import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { categories } from '../data/products';

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function Filters({ 
  selectedCategory, 
  onCategoryChange, 
  priceRange, 
  onPriceRangeChange 
}: FiltersProps) {
  const [openDropdowns, setOpenDropdowns] = useState({
    categories: true,
    price: false,
    size: false,
    color: false
  });

  const toggleDropdown = (dropdown: keyof typeof openDropdowns) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-primary-300">
      <h3 className="text-lg font-semibold mb-4 text-primary-700 bg-primary-100 px-3 py-2 rounded-full text-center border border-primary-300 transform -rotate-1">Filters</h3>
      
      {/* Categories Dropdown */}
      <div className="mb-4">
        <button
          onClick={() => toggleDropdown('categories')}
          className="w-full flex items-center justify-between text-sm font-medium text-primary-600 mb-3 bg-primary-100 px-3 py-2 rounded-full border border-primary-300 hover:bg-primary-200 transition-colors"
        >
          <span>Categories</span>
          {openDropdowns.categories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        {openDropdowns.categories && (
          <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full text-left px-3 py-2 rounded-xl transition-all duration-200 font-medium border transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white border-primary-700 shadow-sm scale-105'
                    : 'bg-primary-50 hover:bg-primary-100 text-primary-600 border-primary-200 hover:border-primary-300'
                }`}
              >
                <span className="text-sm">{category.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Price Range Dropdown */}
      <div className="mb-4">
        <button
          onClick={() => toggleDropdown('price')}
          className="w-full flex items-center justify-between text-sm font-medium text-primary-600 mb-3 bg-pastel-green-light px-3 py-2 rounded-full border border-pastel-green hover:bg-pastel-green transition-colors"
        >
          <span>Price Range</span>
          {openDropdowns.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        {openDropdowns.price && (
          <div className="space-y-3 bg-pastel-green-light p-3 rounded-xl border border-pastel-green animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              <label className="text-xs font-medium text-primary-600">Min: ${priceRange[0]}</label>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                className="w-full h-2 bg-pastel-blue rounded-full appearance-none cursor-pointer slider"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-primary-600">Max: ${priceRange[1]}</label>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-pastel-blue rounded-full appearance-none cursor-pointer slider"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="bg-primary-600 text-white px-2 py-1 rounded-full font-medium border border-primary-700 text-xs">${priceRange[0]}</span>
              <span className="text-xs text-primary-500">to</span>
              <span className="bg-primary-600 text-white px-2 py-1 rounded-full font-medium border border-primary-700 text-xs">${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Size Filter Dropdown */}
      <div className="mb-4">
        <button
          onClick={() => toggleDropdown('size')}
          className="w-full flex items-center justify-between text-sm font-medium text-primary-600 mb-3 bg-pastel-purple-light px-3 py-2 rounded-full border border-pastel-purple hover:bg-pastel-purple transition-colors"
        >
          <span>Size</span>
          {openDropdowns.size ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        {openDropdowns.size && (
          <div className="grid grid-cols-3 gap-2 animate-in slide-in-from-top-2 duration-200">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className="px-2 py-2 font-medium text-primary-600 bg-white border border-pastel-purple rounded-xl hover:bg-pastel-purple-light hover:text-primary-700 hover:scale-105 transition-all duration-200 shadow-sm text-xs"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Color Filter Dropdown */}
      <div>
        <button
          onClick={() => toggleDropdown('color')}
          className="w-full flex items-center justify-between text-sm font-medium text-primary-600 mb-3 bg-pastel-orange-light px-3 py-2 rounded-full border border-pastel-orange hover:bg-pastel-orange transition-colors"
        >
          <span>Colors</span>
          {openDropdowns.color ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        {openDropdowns.color && (
          <div className="grid grid-cols-4 gap-2 animate-in slide-in-from-top-2 duration-200">
            {[
              { name: 'Blue', class: 'bg-pastel-blue' },
              { name: 'Green', class: 'bg-pastel-green' },
              { name: 'Purple', class: 'bg-pastel-purple' },
              { name: 'Pink', class: 'bg-pastel-pink' },
              { name: 'Orange', class: 'bg-pastel-orange' },
              { name: 'Yellow', class: 'bg-pastel-lemon' },
              { name: 'Gray', class: 'bg-pastel-grey' },
              { name: 'Light Blue', class: 'bg-pastel-blue-light' },
            ].map((color) => (
              <button
                key={color.name}
                className={`w-8 h-8 rounded-full border-2 border-white shadow-sm hover:scale-110 hover:rotate-12 transition-all duration-200 ${color.class}`}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}