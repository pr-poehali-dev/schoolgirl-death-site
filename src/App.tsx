import Story from "@/components/Story";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">Stories</h1>

        <Story
          imageUrl="https://cdn.poehali.dev/files/3eb042ad-006c-4c0f-8795-8c4181fcdc29.jpg"
          timestamp="13:30:13"
        />
      </div>
    </div>
  );
}

export default App;
