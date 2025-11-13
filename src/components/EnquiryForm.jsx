import React from 'react';
export default function EnquiryForm(){
return(<form name="enquiry-form" method="POST" data-netlify="true" action="/thank-you-enquiry">
<input type="hidden" name="form-name" value="enquiry-form"/>
<input name="org" placeholder="Organisation" required/>
</form>);
}