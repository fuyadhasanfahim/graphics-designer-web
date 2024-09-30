interface IOrder {
    userId: string;
    serviceName: string;
    fileFormat: string;
    background: string;
    path: string;
    driveLink: string;
    status?: string;
    message?: string;
}

export default IOrder;
