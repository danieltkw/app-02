export default {
    // Daniel

    idConverter: (num) => {
        let str = num.toString();
        let leadingZeros = "00000".substring(0, 5 - str.length);
        return 'C' + leadingZeros + str;
    },

    getCustomers: async () => {
        const customers = await getCustomers.run();

        return customers.map(c => {
            return {
                ID: this.idConverter(c.id),
                CustomerID: c.id,
                Name: c.first_name + ' ' + c.last_name,
                Phone: c.phone,
                Email: c.email,
                BillingAddress: `${c.address1}${ c.city || ''}${ c.country || ''}`,
                ShippingAddress: `${c.address1}${ c.city || ''}${ c.country || ''}`,
                vat: c.vat
            }
        });
    },

    getCustomerOrders: async () => {
        const customerOrders = await getCustomerOrders.run();

        const data = customerOrders.map(o => {
            return {
                OrderId: o.id,
                OrderDate: new Date(o.created).toDateString(),
                Items: o.order_line_count,
                Amount: o.total.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
                Status: o.label
            }
        });

        return data;
    },

    statusColor: (status) => {
        if (status === 'CANCELLED') {
            return 'RGB(255, 0, 0)';
        }
        if (status === 'UNFULFILLED' || status === 'PACKED') {
            return 'RGB(255, 165, 0)';
        }
        if (status === 'SHIPPED' || status === 'DELIVERED') {
            return 'RGB(0, 128, 0)';
        }
        return 'RGB(255, 165, 0)';
    },
	// const check 
    addCustomer: async () => {
        const person = await createPerson.run({
            first_name: inp_addFirstName.text,
            last_name: inp_addLastName.text,
            email: inp_addEmail.text,
            phone: inp_addPhone.text,
            vat: inp_addVat.text
        });

        await createAccount.run({
            personId: person[0].id
        });

        await createLocation.run({
            personId: person[0].id
        });

        closeModal('mdl_addCustomer');

        await this.getCustomers();

        showAlert('Customer created!', 'success');
    }
}
