interface IOrder {
    _id: string;
    userId: string;
    serviceName: string;
    fileFormat: string;
    background: string;
    path: string;
    driveLink: string;
    status?: 'In Progress' | 'Completed' | 'Cancelled' | 'Pending';
    message?: string;
    createdAt: Date;
}

export default IOrder;
