import React from "react";


interface Props {
  children: any;
}

const HospitalMangementSystemDashRight: React.FC<Props> = ({ children }) => {

  return (
    <>
      {children && children}
    </>
  );
};


export default HospitalMangementSystemDashRight;
