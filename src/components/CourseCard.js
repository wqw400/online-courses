export default function CourseCard({ title, description, videoUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <video src={videoUrl} className="rounded w-full" controls />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-500">
        Смотреть
      </button>
    </div>
  );
}
