export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-gray-800 opacity-50"
                onClick={onClose}
            ></div>
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
                <h3 className="text-lg font-medium mb-4">
                    Are you sure you want to delete your account?
                </h3>
                <p className="mb-4">
                    Deleting your account will permanently remove all of your
                    data, including personal information, account settings, and
                    any content you have created. This action cannot be undone.
                </p>
                <p className="mb-4">
                    If you change your mind, you have a grace period of 60 days
                    during which you can restore your account. To do so, simply
                    sign up again using the same email address and credentials.
                    After 60 days, your account and all associated data will be
                    irretrievably deleted.
                </p>
                <p className="mb-4">
                    Please ensure you have backed up any important information
                    before proceeding with the deletion.
                </p>

                <div className="flex justify-end gap-4">
                    <button
                        onClick={onConfirm}
                        className="rounded bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
                    >
                        Yes, delete
                    </button>
                    <button
                        onClick={onClose}
                        className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
