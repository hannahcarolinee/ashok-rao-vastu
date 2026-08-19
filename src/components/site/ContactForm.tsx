import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [homeType, setHomeType] = useState("");
  const [mode, setMode] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    toast.success("Thank you! Your request has been noted.", {
      description: "We will reach out with available consultation slots shortly.",
    });
    form.reset();
    setHomeType("");
    setMode("");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your full name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 ..."
            inputMode="tel"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" required placeholder="Bengaluru, Mysuru, ..." />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="home-type">Type of Home</Label>
          <Select value={homeType} onValueChange={setHomeType}>
            <SelectTrigger id="home-type">
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="independent-house">Independent House</SelectItem>
              <SelectItem value="flat">Flat</SelectItem>
              <SelectItem value="under-construction">Under Construction</SelectItem>
              <SelectItem value="plot">Plot</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="mode">Preferred Mode</Label>
        <Select value={mode} onValueChange={setMode}>
          <SelectTrigger id="mode">
            <SelectValue placeholder="Online or Home Visit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="home-visit">Home Visit</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Your Message / Main Concerns</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your home and what you would like reviewed."
        />
      </div>

      <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
        Request a Consultation
      </Button>
    </form>
  );
}