
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageSquare, Clock, Image, Music, Video, ChevronDown, ChevronUp } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MoodType } from "./MoodSelector";
import { getMoodColor, getMoodEmoji } from "@/lib/mood-utils";
import { EntryProps } from "./EntryCard";
import { useToast } from "@/hooks/use-toast";
import { addComment, toggleLike } from "@/lib/journalStorage";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: Date;
}

interface GroupEntryCardProps {
  entry: {
    id: string;
    entryId: string;
    title: string;
    content: string;
    date: Date;
    mood?: MoodType;
    media?: {
      type: "photo" | "video" | "audio" | "gallery";
      url: string;
    }[];
    sharedBy: string;
    isPartnerEntry?: boolean;
    comments: Comment[];
    likes: string[];
  };
  currentUser: string;
}

const GroupEntryCard: React.FC<GroupEntryCardProps> = ({ entry, currentUser }) => {
  const [expandComments, setExpandComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const { toast } = useToast();
  const isLiked = entry.likes.includes(currentUser);
  const moodColor = getMoodColor(entry.mood);
  
  const handleLike = () => {
    toggleLike(entry.entryId, currentUser);
    toast({
      title: isLiked ? "Like removed" : "Post liked",
      description: isLiked ? "You've removed your like from this post" : "You've liked this post",
    });
  };
  
  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    addComment(entry.entryId, currentUser, newComment);
    setNewComment("");
    
    toast({
      title: "Comment added",
      description: "Your comment has been added to this post",
    });
  };
  
  const renderMediaPreview = () => {
    if (!entry.media || entry.media.length === 0) return null;
    
    const firstMedia = entry.media[0];
    
    if (firstMedia.type === "photo") {
      return (
        <div className="relative h-32 rounded-lg overflow-hidden mb-3">
          <img src={firstMedia.url} alt="" className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
            <Image className="w-4 h-4 text-white" />
          </div>
        </div>
      );
    }
    
    if (firstMedia.type === "gallery" && entry.media.length > 0) {
      return (
        <div className="grid grid-cols-3 gap-1 mb-3">
          {entry.media.slice(0, 3).map((item, index) => (
            <div key={index} className="relative h-20 rounded-lg overflow-hidden">
              <img src={item.url} alt="" className="w-full h-full object-cover" />
              {index === 2 && entry.media.length > 3 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-medium">
                  +{entry.media.length - 3}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
    
    if (firstMedia.type === "audio") {
      return (
        <div className="bg-secondary/50 rounded-lg p-3 flex items-center gap-2 mb-3">
          <Music className="w-4 h-4" />
          <span className="text-sm">Audio recording</span>
        </div>
      );
    }
    
    if (firstMedia.type === "video") {
      return (
        <div className="relative h-32 rounded-lg overflow-hidden mb-3 bg-black/10 flex items-center justify-center">
          <Video className="w-8 h-8" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <div className={cn(
      "rounded-xl shadow-md overflow-hidden animate-fade-in relative",
      "bg-white dark:bg-gray-800",
      moodColor && "relative overflow-hidden"
    )}>
      {moodColor && (
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: moodColor }}
        />
      )}
      
      <div className="p-4 relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback>{entry.sharedBy.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{entry.sharedBy}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-3 h-3 mr-1" />
                <span>{format(entry.date, "MMM d, yyyy")}</span>
              </div>
            </div>
          </div>
          
          {entry.mood && (
            <span className="flex items-center justify-center w-6 h-6 rounded-full" 
                  style={{ backgroundColor: moodColor }}>
              {getMoodEmoji(entry.mood)}
            </span>
          )}
        </div>
        
        <Link to={`/entry/${entry.entryId}`} className="block mb-3">
          <h3 className="text-lg font-medium mb-2">{entry.title}</h3>
          {renderMediaPreview()}
          <p className="text-sm text-muted-foreground line-clamp-3">{entry.content}</p>
        </Link>
        
        <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex gap-4">
            <button 
              onClick={handleLike}
              className={cn(
                "flex items-center gap-1 text-sm",
                isLiked ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              <Heart className={cn("w-4 h-4", isLiked && "fill-primary")} />
              <span>{entry.likes.length}</span>
            </button>
            
            <button 
              onClick={() => setExpandComments(!expandComments)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{entry.comments.length}</span>
            </button>
          </div>
          
          <button 
            onClick={() => setExpandComments(!expandComments)}
            className="text-sm text-muted-foreground hover:text-primary flex items-center"
          >
            {expandComments ? 
              <ChevronUp className="w-4 h-4 ml-1" /> : 
              <ChevronDown className="w-4 h-4 ml-1" />
            }
          </button>
        </div>
        
        {expandComments && (
          <div className="mt-4 space-y-4 animate-slide-down">
            {entry.comments.length > 0 && (
              <div className="space-y-3">
                {entry.comments.map((comment) => (
                  <div key={comment.id} className="flex items-start gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center">
                        <p className="text-xs font-medium">{comment.author}</p>
                        <span className="mx-1 text-muted-foreground">•</span>
                        <p className="text-xs text-muted-foreground">
                          {format(comment.date, "MMM d")}
                        </p>
                      </div>
                      <p className="text-sm mt-1">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex gap-2">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-0 text-sm resize-none"
              />
              <Button 
                onClick={handleAddComment} 
                disabled={!newComment.trim()}
                className="shrink-0"
              >
                Post
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupEntryCard;
