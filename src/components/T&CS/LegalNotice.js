import React from 'react'
import { Section, SectionDivider, SectionSubText, SectionSubTitle, SectionText, SectionTitle } from '../../styles/GlobalComponents';

function LegalNotice() {
  return (
<Section>
<SectionTitle>
Terms & Conditions
</SectionTitle>
<SectionDivider/>
<SectionSubTitle>
Our website
</SectionSubTitle>
<SectionText>
Every effort is made to ensure that the information on this website is regularly checked and kept up to date. However, no liability can be held for the completeness, actuality and accuracy of the information within these pages. The access to and use of the website as well as all information contained or referred to therein lies in the sole responsibility of the user. The contents of linked pages are not a component of this website. No responsibility or liability can be held for the contents of or changes to contents of linked pages.
<br/>
The use of any part of the contents of this website, in particular its reproduction, distribution or transmission, requires the prior permission of Immunitas UK.
</SectionText>

<SectionSubTitle>
  Privacy Policy
</SectionSubTitle>
<SectionText>
Our Privacy Policy explains how we protect and respect the data we collect from you. Your use of this site constitutes acceptance of this policy.
</SectionText>
<SectionSubTitle>
Disclaimer
</SectionSubTitle>
<SectionText>
Copyright© 2022 Immunitas Uk. All rights reserved.
<br/>
No part of this publication may be reproduced or transmitted by any means, electronic, mechanical, (including photocopying), recording or by any information storage and retrieval system, without prior permission from the copyright owners.
<br/>
Immunitas disclaims all responsibility and liability (including negligence) in relation to information on or accessible from this site.
</SectionText>

<SectionSubTitle>
  Your Agreement
</SectionSubTitle>
<SectionText>
The use of our website constitutes your agreement with these terms of use.
</SectionText>

<SectionSubTitle>
  Policy Changes
</SectionSubTitle>
<SectionText>
If our terms of use change in any way, we will place an updated version on this page. Regularly reviewing this page ensures you are always aware of what information we collect, how we use it and under what circumstances, if any, we will share it with other parties.
</SectionText>
</Section>
    )
}

export default LegalNotice