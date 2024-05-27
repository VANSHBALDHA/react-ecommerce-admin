'use client';
import React from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import Pagination from '~/components/elements/basic/Pagination';
import TableProjectItems from '~/components/shared/tables/TableProjectItems';
import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';

const ManageCustomers = () => {
    return (
        <ContainerDefault title="Manage Customers">
            <HeaderDashboard
                title="Manage Customers"
                description="Martfury Product Listing "
            />
            <section className="ps-items-listing">
                <div className="ps-section__actions">
                    <Link
                        href="/products/create-product"
                        className="ps-btn success">
                        <i className="icon icon-plus mr-2" />
                        New User
                    </Link>
                </div>
                <div className="ps-section__content">
                    <TableProjectItems />
                </div>
                <div className="ps-section__footer">
                    <p>Show 10 in 30 items.</p>
                    <Pagination />
                </div>
            </section>
        </ContainerDefault>
    );
};
export default ManageCustomers;
