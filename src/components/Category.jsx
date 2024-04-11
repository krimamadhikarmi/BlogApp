import { Details } from "./Details";

export function Category(){
   return(
    <>
      <Details
       description=' Quis hendrerit dolor magna eget est lorem ipsum dolor sit'
       date ='July 19, 2020'
       readtime='4 min read'
       />

        <Details
        description=' Senectus et netus et malesuada fames ac turpis egestas integer'
        date ='June 30, 2020'
        readtime='5 min read'
        />

        <Details
        description='Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies'
        date ='June 26, 2020'
        readtime='3 min read'
        />

    </>
   )
}