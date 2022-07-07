import React from "react";
import { MyInput } from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";

export const PostFilter = ({filter, setFilter}) => {
   return(
      <div>
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="search"
        />
        <MySelect
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          value={filter.sort}
          defaultValue="sorting"
          options={[
            { value: 'title', name: 'title' },
            { value: 'body', name: 'description' }
          ]}
        />
      </div>
   )
}