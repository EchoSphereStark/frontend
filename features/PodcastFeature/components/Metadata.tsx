import React from 'react'

type MetadataProps = {
  file: File;
  tagInput: string;
  setTagInput: React.Dispatch<React.SetStateAction<string>>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  title:string;
  setTitle:React.Dispatch<React.SetStateAction<string>>;
};

export default function Metadata({
  file,
  tagInput,
  setTagInput,
  tags,
  setTags,
  category,
  setCategory,
  description,
  setDescription,
  title,
  setTitle
}: MetadataProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput('');
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <section className="flex flex-col items-center mt-8">
      <div className="bg-[#FFF6FB] border-[2px]  border-[#AAAAAA] rounded-lg px-6 py-4 flex flex-col items-center w-full">
        {file.type.startsWith("audio/") && (
          <audio
            controls
            src={URL.createObjectURL(file)}
            className="mt-4 w-full"
          />
        )}
        {file.type.startsWith("video/") && (
          <video
            controls
            src={URL.createObjectURL(file)}
            className="mt-4 w-full max-h-64"
          />
        )}
      </div>
      <div className="w-full mt-6 relative">
        <label
          htmlFor="podcast-title"
          className="absolute -top-3 left-5 bg-[#FFFFFF] px-2 text-[12px] font-medium text-[#AAAAAA] rounded"
          style={{ pointerEvents: 'none' }}
        >
          Podcast Title
        </label>
        <input
          id="podcast-title"
          type="text"
          placeholder="Enter the title of your podcast"
          className="w-full h-14 px-6 py-2 border-2 border-[#CCCCCC] rounded-full focus:outline-none focus:border-[#6F0439] text-[14px] font-normal bg-[#FFF6FB] transition-colors"
          autoComplete="off"
          maxLength={100}
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          aria-label="Podcast Title"
        />
      </div>
      <div className="w-full mt-6 relative">
        <label
          htmlFor="Description"
          className="absolute -top-3 left-5 bg-[#FFFFFF] px-2 text-[12px] font-medium text-[#AAAAAA] rounded"
          style={{ pointerEvents: 'none' }}
        >
          Description
        </label>
        <input
          id="Description"
          type="text"
          placeholder="Enter the title of your podcast"
          className="w-full h-14 px-6 py-2 border-2 border-[#CCCCCC] rounded-full focus:outline-none focus:border-[#6F0439] text-[14px] font-normal bg-[#FFF6FB] transition-colors"
          autoComplete="off"
          maxLength={100}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label="Description"
        />
      </div>
      {/* tags */}
      <div className="w-full mt-6 relative">
        <label
          htmlFor="tags"
          className="absolute -top-3 left-5 bg-[#FFFFFF] px-2 text-[12px] font-medium text-[#AAAAAA] rounded"
          style={{ pointerEvents: 'none' }}
        >
          Tags
        </label>
        <div className="flex flex-wrap items-center gap-2 w-full h-14 px-6 py-2 border-2 border-[#CCCCCC] rounded-full bg-[#FFF6FB] transition-colors focus-within:border-[#6F0439]">
          {tags.map((tag: string, idx: number) => (
            <span
              key={tag}
              className="flex items-center border border-[#6F0439] rounded-full px-3 py-1 text-[13px] font-medium text-[#6F0439] bg-white mr-1"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(idx)}
                className="ml-2 text-[#6F0439] hover:text-[#b03959] focus:outline-none"
                aria-label={`Remove tag ${tag}`}
                tabIndex={-1}
              >
                &times;
              </button>
            </span>
          ))}
          <input
            id="tags"
            type="text"
            value={tagInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type a tag and press Enter"
            className="flex-1 min-w-[120px] border-none bg-transparent focus:outline-none text-[14px] font-normal"
            autoComplete="off"
            maxLength={100}
            aria-label="Tags"
          />
        </div>
      </div>
      {/* podcast category dropdown */}
      <div className="w-full mt-6 relative">
        <label
          htmlFor="category"
          className="absolute -top-3 left-5 bg-[#FFFFFF] px-2 text-[12px] font-medium text-[#AAAAAA] rounded"
          style={{ pointerEvents: 'none' }}
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          className="w-full h-14 px-6 py-2 border-2 border-[#CCCCCC] rounded-full focus:outline-none focus:border-[#6F0439] text-[14px] font-normal bg-[#FFF6FB] transition-colors "
          value={category}
          onChange={e => setCategory(e.target.value)}
          aria-label="Category"
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="Arts">Arts</option>
          <option value="Business">Business</option>
          <option value="Comedy">Comedy</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Music">Music</option>
          <option value="News">News</option>
          <option value="Science">Science</option>
          <option value="Sports">Sports</option>
          <option value="Technology">Technology</option>
          <option value="TV & Film">TV & Film</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </section>
  );
}
