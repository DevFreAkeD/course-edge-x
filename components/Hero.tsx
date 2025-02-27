function Hero() {
    return (
      <div className="relative h-[45vh] w-full flex items-center justify-center text-center">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
  
        {/* Centered Content */}
        <div className="relative container mx-auto px-4 flex flex-col items-center justify-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent p-3">
                Unlock Your Potential with CourseEdgeX.
            </h1>
            <p className="text-xl text-muted-foreground">
              Unlock high-quality courses designed to help you grow and excel in your career. <br /> 
              Gain real-world expertise from top mentors. <br /> 
              Learn, grow, and stay ahead with CourseEdgeX.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  