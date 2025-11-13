import React from 'react';
export default function OrderForm(){
return(<form name="order-form" method="POST" data-netlify="true" action="/thank-you-order">
<input type="hidden" name="form-name" value="order-form"/>
<input name="name" placeholder="Name" required/>
</form>);
}