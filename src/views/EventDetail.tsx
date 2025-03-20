import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { events } from "../data/events";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { EventHeader } from "../components/event/EventHeader";
import { EventInfo } from "../components/event/EventInfo";
import { EventSchedule } from "../components/event/EventSchedule";
import { OrganizerCard } from "../components/event/OrganizerCard";
import { RegistrationButton } from "../components/event/RegistrationButton";

export const EventDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs eventTitle={event.title} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <EventHeader title={event.title} imageUrl={event.imageUrl} isPast={event.isPast} onBack={() => navigate(-1)} />

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white shadow-lg p-8 space-y-8">
            <EventInfo date={event.date} location={event.location} />

            <div className="prose max-w-none">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{event.longDescription || event.description}</p>
              </div>
            </div>

            {event.schedule && <EventSchedule schedule={event.schedule} />}
            <OrganizerCard organizer={event.organizer} />

            {!event.isPast && event.registrationLink && <RegistrationButton registrationLink={event.registrationLink} />}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};