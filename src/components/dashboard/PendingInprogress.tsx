import { Link } from 'react-router-dom'
import IOrder from '../../hooks/order.interface'
import OrderUpdate from './OrderUpdate'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PendingInprogress = () => {
    const [orders, setOrders] = useState([])
    const [userId, setUserId] = useState('')
    const [isModalOpen, setModalOpen] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null)

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:5000/api/v1/orders/get-all-orders',
                )
                setOrders(response.data.data)
            } catch (error) {
                console.error('Error fetching orders:', error)
            }
        }

        fetchOrders()
    }, [])

    const formatDateAndTime = (createdAt: Date) => {
        const date = new Date(createdAt)

        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
        }
        const dateString = date.toLocaleDateString('en-US', options)

        const timeOptions: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }
        const timeString = date.toLocaleTimeString('en-US', timeOptions)

        return `${dateString}, ${timeString}`
    }

    const openModal = (order: IOrder, userId: string) => {
        setSelectedOrder(order)
        setModalOpen(true)
        setUserId(userId)
    }

    const closeModal = () => {
        setModalOpen(false)
        setSelectedOrder(null)
        setUserId('')
    }

    return (
        <>
            <div className="overflow-x-auto w-full max-w-7xl mx-auto my-10 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-semibold leading-6 text-gray-900 mb-3">
                    Inprogress/Pending
                </h2>
                <table className="min-w-full border border-black bg-white text-sm shadow-md">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                                Date
                            </th>
                            <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                                Service Name
                            </th>
                            <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                                Drive Link
                            </th>
                            <th className="whitespace-nowrap border border-black px-4 py-2 font-medium text-gray-900">
                                Status
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {orders.length > 1
                            ? orders
                                  .filter(
                                      (order: IOrder) =>
                                          order.status === 'In Progress' ||
                                          order.status === 'Pending',
                                  )
                                  .map((order: IOrder) => {
                                      const {
                                          createdAt,
                                          serviceName,
                                          driveLink,
                                          status,
                                          userId,
                                          _id,
                                      } = order

                                      return (
                                          <tr key={_id}>
                                              <td className="whitespace-nowrap text-center border border-black px-4 py-2 font-medium text-gray-900">
                                                  {formatDateAndTime(createdAt)}
                                              </td>
                                              <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                                  {serviceName}
                                              </td>
                                              <td className="whitespace-nowrap border border-black px-4 py-2 text-blue-500">
                                                  <Link
                                                      to={`https://www.${driveLink}`}
                                                  >
                                                      {driveLink}
                                                  </Link>
                                              </td>
                                              <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                                  {status}
                                              </td>
                                              <td className="whitespace-nowrap border border-black px-4 py-2">
                                                  <button
                                                      onClick={() =>
                                                          openModal(
                                                              order,
                                                              userId,
                                                          )
                                                      }
                                                      className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                                                  >
                                                      More
                                                  </button>
                                              </td>
                                          </tr>
                                      )
                                  })
                            : orders.length === 1 &&
                              (() => {
                                  const order = orders[0]
                                  const {
                                      createdAt,
                                      serviceName,
                                      driveLink,
                                      status,
                                      userId,
                                      _id,
                                  } = order

                                  return (
                                      <tr key={_id}>
                                          <td className="whitespace-nowrap text-center border border-black px-4 py-2 font-medium text-gray-900">
                                              {formatDateAndTime(createdAt)}
                                          </td>
                                          <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                              {serviceName}
                                          </td>
                                          <td className="whitespace-nowrap border border-black px-4 py-2 text-blue-500">
                                              <Link
                                                  to={`https://www.${driveLink}`}
                                              >
                                                  {driveLink}
                                              </Link>
                                          </td>
                                          <td className="whitespace-nowrap border border-black px-4 py-2 text-gray-700">
                                              {status}
                                          </td>
                                          <td className="whitespace-nowrap border border-black px-4 py-2">
                                              <button
                                                  onClick={() =>
                                                      openModal(order, userId)
                                                  }
                                                  className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                                              >
                                                  More
                                              </button>
                                          </td>
                                      </tr>
                                  )
                              })()}
                    </tbody>
                </table>
            </div>

            {selectedOrder && (
                <OrderUpdate
                    isOpen={isModalOpen}
                    order={selectedOrder}
                    userId={userId}
                    onClose={closeModal}
                />
            )}
        </>
    )
}

export default PendingInprogress
