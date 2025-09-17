import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40px;
  width: 100%;
`;

export function Footer() {
  return (
    <FooterDiv>
     <p>
     
  © 2025 Sorting Visualizer | Made with ❤️ by <a href="https://github.com/akankshal14" class="text-blue-500 hover:underline">Akanksha</a>


     </p>
    </FooterDiv>
  );
}
