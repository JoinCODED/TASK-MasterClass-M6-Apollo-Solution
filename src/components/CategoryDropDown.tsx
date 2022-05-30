import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_CUISINES, GET_RECIPES } from "../graphql/queries";
import { Cuisines } from "../models/recipes";

interface CategoryDropDownProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string | undefined;
}

const CategoryDropDown = (props: CategoryDropDownProps) => {
  const { data, loading, error } = useQuery<Cuisines>(GET_CUISINES);

  if (loading) {
    return <h1>LOADING!</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <select onChange={props.onChange} value={props.value}>
        <option value="all">All</option>
        {data?.cuisines.map((cuisine) => (
          <option value={cuisine.name} key={cuisine.id}>
            {cuisine.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropDown;
