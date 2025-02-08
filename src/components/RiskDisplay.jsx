
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card"
import {
     BarChart,
     Bar,
     XAxis,
     YAxis,
     Tooltip,
     Legend,
     PieChart,
     Pie,
     Cell,
     ResponsiveContainer,
} from "recharts";

const COLORS = ["#FF4C4C", "#4CAF50"];

const RiskDisplay = () => {
     const riskData = useSelector((state) => state.riskAnalysis.riskData);

     if (!riskData) return null;

     return (
          <div className="space-y-5">
               {riskData.map((data, index) => {
                    const riskChartData = data.level_vise_risk_analysis.map((level) => ({
                         level: `Level ${level.level}`,
                         risk_percentage: parseFloat(level.risk_percentage),
                    }));

                    const entityChartData = data.level_vise_risk_analysis.map((level) => ({
                         level: `Level ${level.level}`,
                         risky: level.risky_entities_count,
                         non_risky: level.non_risky_entities_count,
                    }));

                    return (
                         <motion.div
                              key={index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.9 }}
                              className="risk-item"
                         >
                              <Card className="border shadow-lg rounded-md p-4 mt-5">
                                   <CardHeader>
                                        <CardTitle>Source Address - {data.source_address}</CardTitle>
                                        <CardDescription>Overall Risk Score: {data.risk_score}</CardDescription>
                                   </CardHeader>
                                   <CardContent>
                                        <p className="font-bold text-red-500">Risk: {data.risk}</p>

                                        <div className='grid grid-cols-2 gap-4'>
                                             {/* Bar Chart for Risk Percentage by Level */}
                                        <div className="mt-6">
                                             <h3 className="text-lg font-semibold text-center mb-3">Risk Percentage by Level</h3>
                                             <ResponsiveContainer width="100%" height={400}>
                                                  <BarChart data={riskChartData}>
                                                       <XAxis dataKey="level" />
                                                       <YAxis />
                                                       <Tooltip />
                                                       <Legend />
                                                       <Bar dataKey="risk_percentage" fill="#FF4C4C" />
                                                  </BarChart>
                                             </ResponsiveContainer>
                                        </div>

                                        {/* Pie Chart for Risky vs. Non-Risky Entities */}
                                        <div className="mt-6">
                                             <h3 className="text-lg font-semibold text-center mb-3">Risky vs. Non-Risky Entities</h3>
                                             <ResponsiveContainer width="100%" height={300}>
                                                  <PieChart>
                                                       {entityChartData.map((entry, idx) => (
                                                            <Pie
                                                                 key={idx}
                                                                 data={[
                                                                      { name: "Risky", value: entry.risky },
                                                                      { name: "Non-Risky", value: entry.non_risky },
                                                                 ]}
                                                                 cx="50%"
                                                                 cy="50%"
                                                                 outerRadius={100}
                                                                 fill="#8884d8"
                                                                 label
                                                            >
                                                                 {[
                                                                      { name: "Risky", value: entry.risky },
                                                                      { name: "Non-Risky", value: entry.non_risky },
                                                                 ].map((_, i) => (
                                                                      <Cell key={`cell-${i}`} fill={COLORS[i]} />
                                                                 ))}
                                                            </Pie>
                                                       ))}
                                                       <Tooltip />
                                                  </PieChart>
                                             </ResponsiveContainer>
                                        </div>
                                        </div>

                                        
                                   </CardContent>
                                   <CardFooter></CardFooter>
                              </Card>
                         </motion.div>
                    );
               })}
          </div>
     );
};

export default RiskDisplay;
