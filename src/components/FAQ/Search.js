import React, { useState } from "react";
import { MdSearch , MdClose } from "react-icons/md";
import styled from 'styled-components';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.question.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  
  return (
    <span className="">
      <h1 className="font-display mb-10 text-center text-[25px] font-medium text-white">How can we help?</h1>

    <div className="relative mx-auto xs:max-w-[80%]">
        
        <a className="flex">
        <input className="text-black placeholder-jacarta-500 focus:outline-none focus:border-[#212D45] focus:ring-1 focus:ring-[#212D45] border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10"

          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        

        
        {filteredData.length === 0 ? (
            // <MdSearch size="2.5rem" ="1rem"/>
            <MdSearch size="2.5rem" className="pt-[10px]" />
          ) : (
            <MdClose size="2.5rem" className="pt-[10px]" id="clearBtn" onClick={clearInput} />
          )}
        
        </a>

    </div>
    
      {filteredData.length != 0 && (

            <ResultBoxes>

          {filteredData.slice(0, 1).map((value) => {
            return (
                <ResultBox>
                
                <SearchBoxNum>
                <p>{value.question} </p>
                </SearchBoxNum>
                <SearchBoxText>
                <p className="pb-4">{value.answer_section1}</p>
                <p className="pb-4">{value.answer_section2}</p>
                <p className="pb-4">{value.answer_section3}</p>
                <p className="pb-4">{value.answer_section4}</p>
                <p className="">{value.answer_section5}</p>
            
                </SearchBoxText>
              
              </ResultBox>

            );
          })}

        </ResultBoxes>

        

      )}
    </span>
  );
}

export default SearchBar;


const ResultBoxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  margin: 20px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 10px 0 32px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: block;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 5px auto;
  }
`

const ResultBox = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 100%;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 100%;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 100%;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 100%px;
    padding: 12px;
    margin-top:10px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`

const SearchBoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

const SearchBoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 15px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 15px;
    font-weight:normal;
  }
`



