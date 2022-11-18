import React,{ useState } from "react";
import { Container } from "../../components/Container/styles";
// import { Header } from "../../components/header/header";
import { P } from "../../components/p/p";
import Paypal  from "../../components/paypal/paypal";
import { DonateButton, Title, Width, WrapperContainer } from "./styles";

import Stack from "../../components/paystack/paystack"

export const Donate= ()=>{
    const [donate, setDonate] = useState(false )
    return(
        <Container>
            {/* <Header/> */}
            <WrapperContainer>
                <Width>

                <Title>DONATE NOW</Title>
                <P>
   
                </P>
{
    donate ? (
        <Paypal/>
    ) :(
                <DonateButton onClick={()=>{
                    setDonate(true)
                }}>
                    Donate

                </DonateButton>

    )
}

<Stack/>
                </Width>



            </WrapperContainer>

            
        </Container>
    )
}