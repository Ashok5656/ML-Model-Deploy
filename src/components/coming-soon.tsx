import React from 'react';
import { Information, Rocket, Help, Flash, View } from "@carbon/icons-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center h-[70vh]">
      <div className="size-24 rounded-3xl bg-blue-50 dark:bg-[#2A53A0]/10 flex items-center justify-center mb-8 relative">
         <Rocket className="size-10 text-[#2A53A0] animate-bounce" />
         <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full" />
      </div>
      
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        Feature Launching Soon
      </h2>
      <p className="text-slate-500 max-w-lg mb-10 leading-relaxed text-lg">
        The <span className="font-semibold text-[#2A53A0] underline underline-offset-4 decoration-2">{title}</span> module is currently under architectural review as part of our Deep Enterprise Security upgrade. We will update soon!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl w-full mb-12">
        <Card className="border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <Flash className="size-6 text-amber-500 mb-2 mx-auto" />
            <h4 className="text-sm font-semibold mb-1">High Performance</h4>
            <p className="text-xs text-slate-500">Optimized for enterprise scale.</p>
          </CardContent>
        </Card>
        <Card className="border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <View className="size-6 text-blue-500 mb-2 mx-auto" />
            <h4 className="text-sm font-semibold mb-1">Deep Visibility</h4>
            <p className="text-xs text-slate-500">Enhanced audit trail tracking.</p>
          </CardContent>
        </Card>
        <Card className="border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <Help className="size-6 text-purple-500 mb-2 mx-auto" />
            <h4 className="text-sm font-semibold mb-1">Smart Support</h4>
            <p className="text-xs text-slate-500">Integrated AI assistance.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" className="border-slate-200 text-slate-600 px-8 h-12">
           Back to Overview
        </Button>
        <Button className="bg-[#2A53A0] hover:bg-[#2A53A0]/90 text-white px-8 h-12">
           <Information className="size-4 mr-2" />
           Request Early Access
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;
