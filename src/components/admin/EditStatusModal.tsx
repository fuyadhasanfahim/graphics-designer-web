import { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import IOrder from '../../hooks/order.interface'

interface Order {
    order: IOrder
    _id: string
    serviceName: string
    status: string
}

interface EditStatusModalProps {
    orderId: string
    isOpen: boolean
    onClose: () => void
    currentStatus: string
    onUpdate: (orderId: string, newStatus: string) => void
}

const statusOptions = ['Pending', 'Started', 'Done', 'Cancelled']

const EditStatusModal: React.FC<EditStatusModalProps> = ({
    orderId,
    isOpen,
    onClose,
    currentStatus,
    onUpdate,
}) => {
    const [order, setOrder] = useState<Order | null>(null)
    const [newStatus, setNewStatus] = useState(currentStatus)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (isOpen && orderId) {
            const fetchOrder = async () => {
                try {
                    setLoading(true)
                    const response = await axios.get(
                        `http://localhost:5000/api/v1/orders/get-orders-by-order-id/${orderId}`,
                    )
                    setOrder(response.data)
                } catch (err) {
                    toast.error((err as Error).message)
                } finally {
                    setLoading(false)
                }
            }
            fetchOrder()
        }
    }, [orderId, isOpen])

    const handleStatusChange = () => {
        onUpdate(orderId, newStatus)
        toast.success('Order updated successfully. Closing...')
        setTimeout(() => {
            onClose()
        }, 2000)
    }

    if (!isOpen) return null

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-4 w-96">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <h2 className="text-xl font-semibold mb-4">
                                Edit Order Status
                            </h2>

                            <div className="mb-4">
                                <label
                                    htmlFor="status"
                                    className="block font-medium text-gray-700"
                                >
                                    Status
                                </label>
                                <select
                                    id="status"
                                    value={order?.order.status}
                                    onChange={e => setNewStatus(e.target.value)}
                                    className="mt-1 block w-full bg-white border-gray-300 border px2 py-1"
                                >
                                    {statusOptions.map(status => (
                                        <option key={status} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mt-6 flex justify-end space-x-4">
                                <button
                                    onClick={onClose}
                                    className="px-4 py-2 bg-gray-500 text-white rounded"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={handleStatusChange}
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Toaster position="bottom-right" reverseOrder={false} />
        </>
    )
}

export default EditStatusModal
